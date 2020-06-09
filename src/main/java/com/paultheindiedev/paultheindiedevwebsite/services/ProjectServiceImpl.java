package com.paultheindiedev.paultheindiedevwebsite.services;

import com.paultheindiedev.paultheindiedevwebsite.models.*;
import com.paultheindiedev.paultheindiedevwebsite.repositories.ProjectRepository;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository repository;

    @Override
    public boolean createProject(CreateProjectRequest createProjectRequest) {
        ProjectsFolder projects = repository.findById(createProjectRequest.getProjectId()).get();

        projects.getProjects().add(new Project(createProjectRequest));

        repository.save(projects);

        return true;
    }

    @Override
    public boolean updateProject(UpdateProjectRequest updateProjectRequest) {
        ProjectsFolder projects = repository.findById(updateProjectRequest.getProjectId()).get();

        projects.getProjects().forEach(game -> {
            if (game.getTitle().equals(updateProjectRequest.getTitle())) {
                game.setTitle(updateProjectRequest.getTitle());
                game.setGitHubLink(updateProjectRequest.getGitHubLink());
                game.setDescription(updateProjectRequest.getDescription());
                game.setImageLinks(updateProjectRequest.getImageLinks());
            }
        });

        repository.save(projects);

        return true;
    }
}
