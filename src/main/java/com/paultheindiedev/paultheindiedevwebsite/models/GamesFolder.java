package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document(collection = "GAMES_FOLDER")
public class GamesFolder {

    @Id
    private String username;
    private List<Game> games = new ArrayList<>();
}
