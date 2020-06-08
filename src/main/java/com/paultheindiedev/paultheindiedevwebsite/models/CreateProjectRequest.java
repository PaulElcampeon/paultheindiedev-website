package com.paultheindiedev.paultheindiedevwebsite.models;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CreateProjectRequest {

    private String projectId;
    private String title;
    private String description;
    private String gitHubLink;
    private List<String> imageLinks = new ArrayList<>();
}
