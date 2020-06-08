package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;
import java.util.List;

@Data
@Document(collection = "USERS")
public class User {

    @Id
    private String username;
    private String password;
    private List<String> roles = Arrays.asList("USER");

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
