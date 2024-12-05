package com.ninos.service;

import com.ninos.dto.LoginRequest;
import com.ninos.dto.RegisterRequest;
import com.ninos.dto.Response;
import com.ninos.dto.UserDTO;
import com.ninos.entity.User;

public interface UserService {

    Response registerUser(RegisterRequest registerRequest);

    Response loginUser(LoginRequest loginRequest);

    Response getAllUsers();

    User getCurrentLoggedInUser();

    Response getUserById(Long id);

    Response updateUser(Long id, UserDTO userDTO);

    Response deleteUser(Long id);

    Response getUserTransactions(Long id);

}
