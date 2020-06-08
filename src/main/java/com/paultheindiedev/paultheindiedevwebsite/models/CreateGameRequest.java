package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CreateGameRequest {

    private String gameId;
    private String title;
    private String releaseInfo;
    private String description;
    private String downloadLink;
    private List<String> imageLinks = new ArrayList<>();
}
