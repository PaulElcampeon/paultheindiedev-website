package com.paultheindiedev.paultheindiedevwebsite.controllers;

import com.paultheindiedev.paultheindiedevwebsite.models.CreateProjectRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.CreateUserRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.UpdateProjectRequest;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.ProjectService;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("projects")
public class ProjectsController {

    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createProject(@RequestBody CreateProjectRequest createProjectRequest) {

        projectService.createProject(createProjectRequest);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<?> updateProject(@RequestBody UpdateProjectRequest updateProjectRequest) {

        projectService.updateProject(updateProjectRequest);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
