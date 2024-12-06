package com.ninos.service;

import com.ninos.dto.Response;
import com.ninos.dto.SupplierDTO;

public interface SupplierService {

    Response addSupplier(SupplierDTO supplierDTO);

    Response getAllSuppliers();

    Response getSupplierById(Long id);

    Response updateSupplier(Long id, SupplierDTO supplierDTO);

    Response deleteSupplier(Long id);

}
