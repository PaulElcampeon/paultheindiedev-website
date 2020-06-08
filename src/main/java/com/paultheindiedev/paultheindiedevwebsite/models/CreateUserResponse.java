package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;

@Data
public class CreateUserResponse {

    private boolean success;

    public CreateUserResponse() {}

    public CreateUserResponse(boolean success) {
        this.success = success;
    }
}
