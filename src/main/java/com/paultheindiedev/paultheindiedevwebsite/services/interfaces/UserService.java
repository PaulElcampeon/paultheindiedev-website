package com.paultheindiedev.paultheindiedevwebsite.services.interfaces;

import com.paultheindiedev.paultheindiedevwebsite.models.AuthenticationRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.AuthenticationResponse;
import com.paultheindiedev.paultheindiedevwebsite.models.CreateUserRequest;

public interface UserService {

    boolean createUser(CreateUserRequest createUserRequest) throws Exception;

    AuthenticationResponse authenticateUser(AuthenticationRequest loginMessage) throws Exception;

    boolean checkIfUsernameExists(String username);
}
