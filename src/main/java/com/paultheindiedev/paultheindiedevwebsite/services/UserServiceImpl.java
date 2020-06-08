package com.paultheindiedev.paultheindiedevwebsite.services;

import com.paultheindiedev.paultheindiedevwebsite.models.AuthenticationRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.AuthenticationResponse;
import com.paultheindiedev.paultheindiedevwebsite.models.CreateUserRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.User;
import com.paultheindiedev.paultheindiedevwebsite.repositories.UserRepository;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.UserService;
import com.paultheindiedev.paultheindiedevwebsite.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public boolean createUser(CreateUserRequest createUserRequest) {
        repository.insert(new User(createUserRequest.getUsername(), passwordEncoder.encode(createUserRequest.getPassword())));

        return true;
    }

    @Override
    public AuthenticationResponse authenticateUser(AuthenticationRequest loginMessage) throws Exception {
        return null;
    }

    @Override
    public boolean checkIfUsernameExists(String username) {
        return repository.existsById(username);
    }
}
