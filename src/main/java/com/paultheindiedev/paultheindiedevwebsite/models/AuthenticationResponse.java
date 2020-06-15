package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;
    private ProjectsFolder projectsFolder;
    private GamesFolder gamesFolder;

    public AuthenticationResponse() {}

    public AuthenticationResponse(String jwt, ProjectsFolder projectsFolder, GamesFolder gamesFolder) {
        this.jwt = jwt;
        this.projectsFolder = projectsFolder;
        this.gamesFolder = gamesFolder;
    }
}
