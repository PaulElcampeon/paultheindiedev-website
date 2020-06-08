package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Project {

    private String title;
    private String description;
    private String gitHubLink;
    private List<String> imageLinks = new ArrayList<>();

    public Project() {}

    public Project(CreateProjectRequest createProjectRequest) {
        title = createProjectRequest.getTitle();
        description = createProjectRequest.getDescription();
        gitHubLink = createProjectRequest.getGitHubLink();
        imageLinks = createProjectRequest.getImageLinks();
    }
}
