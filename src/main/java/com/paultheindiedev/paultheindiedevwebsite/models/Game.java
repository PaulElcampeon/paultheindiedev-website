package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Game {

    private String title;
    private String releaseInfo;
    private String description;
    private String downloadLink;
    private List<String> imageLinks = new ArrayList<>();

    public Game() {}

    public Game(CreateGameRequest createGameRequest) {
        title = createGameRequest.getTitle();
        releaseInfo = createGameRequest.getReleaseInfo();
        description = createGameRequest.getDescription();
        downloadLink = createGameRequest.getDownloadLink();
        imageLinks = createGameRequest.getImageLinks();
    }
}
