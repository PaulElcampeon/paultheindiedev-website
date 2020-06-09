package com.paultheindiedev.paultheindiedevwebsite.controllers;

import com.paultheindiedev.paultheindiedevwebsite.models.AuthenticationRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.AuthenticationResponse;
import com.paultheindiedev.paultheindiedevwebsite.models.CreateUserRequest;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody CreateUserRequest createUserMessage) throws Exception {

        userService.createUser(createUserMessage);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        AuthenticationResponse resp = userService.authenticateUser(authenticationRequest);

        return new ResponseEntity<>(resp, HttpStatus.ACCEPTED);
    }
}
