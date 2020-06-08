package com.paultheindiedev.paultheindiedevwebsite.services;

import com.paultheindiedev.paultheindiedevwebsite.models.CustomUserDetails;
import com.paultheindiedev.paultheindiedevwebsite.models.User;
import com.paultheindiedev.paultheindiedevwebsite.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findById(username).orElseThrow(NoSuchElementException::new);
        return new CustomUserDetails(user);
    }
}
