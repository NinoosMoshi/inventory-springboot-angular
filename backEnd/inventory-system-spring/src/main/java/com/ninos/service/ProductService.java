package com.ninos.service;

import com.ninos.dto.ProductDTO;
import com.ninos.dto.Response;
import org.springframework.web.multipart.MultipartFile;

public interface ProductService {

    Response saveProduct(ProductDTO productDTO, MultipartFile imageFile);

    Response getAllProducts();

    Response getProductById(Long id);

    Response updateProduct(ProductDTO productDTO, MultipartFile imageFile);

    Response deleteProduct(Long id);

}
