package com.ninos.service.impl;

import com.ninos.dto.CategoryDTO;
import com.ninos.dto.Response;
import com.ninos.dto.SupplierDTO;
import com.ninos.dto.UserDTO;
import com.ninos.entity.Category;
import com.ninos.entity.Supplier;
import com.ninos.exceptions.NotFoundException;
import com.ninos.repository.SupplierRepository;
import com.ninos.service.SupplierService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class SupplierServiceImpl implements SupplierService {

    private final SupplierRepository supplierRepository;
    private final ModelMapper modelMapper;


    @Override
    public Response addSupplier(SupplierDTO supplierDTO) {
        Supplier supplierToSave = modelMapper.map(supplierDTO, Supplier.class);
        supplierRepository.save(supplierToSave);

        return Response.builder()
                .status(200)
                .message("Supplier created successfully")
                .build();
    }

    @Override
    public Response getAllSuppliers() {
        List<Supplier> suppliers = supplierRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));

        List<SupplierDTO> supplierDTOS = modelMapper.map(suppliers, new TypeToken<List<SupplierDTO>>() {}.getType());

        return Response.builder()
                .status(200)
                .message("success")
                .suppliers(supplierDTOS)
                .build();
    }

    @Override
    public Response getSupplierById(Long id) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Supplier not found"));

        SupplierDTO supplierDTO = modelMapper.map(supplier, SupplierDTO.class);

        return Response.builder()
                .status(200)
                .message("success")
                .supplier(supplierDTO)
                .build();
    }

    @Override
    public Response updateSupplier(Long id, SupplierDTO supplierDTO) {
        Supplier existingSupplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Supplier not found"));

        if(supplierDTO.getName() != null) existingSupplier.setName(supplierDTO.getName());
        if(supplierDTO.getAddress() != null) existingSupplier.setAddress(supplierDTO.getAddress());

        supplierRepository.save(existingSupplier);

        return Response.builder()
                .status(200)
                .message("Supplier updated successfully")
                .build();
    }

    @Override
    public Response deleteSupplier(Long id) {
        supplierRepository.findById(id).orElseThrow(() -> new NotFoundException("Supplier not found"));
        supplierRepository.deleteById(id);

        return Response.builder()
                .status(200)
                .message("Supplier deleted successfully")
                .build();
    }
}
