package com.paultheindiedev.paultheindiedevwebsite.services;

import com.paultheindiedev.paultheindiedevwebsite.models.*;
import com.paultheindiedev.paultheindiedevwebsite.repositories.UserRepository;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.GameService;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.ProjectService;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.UserService;
import com.paultheindiedev.paultheindiedevwebsite.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
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
    private ProjectService projectService;

    @Autowired
    private GameService gameService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public boolean createUser(CreateUserRequest createUserRequest) {
        repository.insert(new User(createUserRequest.getUsername(), passwordEncoder.encode(createUserRequest.getPassword())));

        gameService.createGameFolder(createUserRequest.getUsername());

        projectService.createProjectGolder(createUserRequest.getUsername());

        return true;
    }

    @Override
    public AuthenticationResponse authenticateUser(AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);

        final GamesFolder gamesFolder = gameService.getGame(authenticationRequest.getUsername());

        final ProjectsFolder projectsFolder = projectService.getFolder(authenticationRequest.getUsername());

        return new AuthenticationResponse(jwt, projectsFolder, gamesFolder);
    }

    @Override
    public boolean checkIfUsernameExists(String username) {
        return repository.existsById(username);
    }
}
