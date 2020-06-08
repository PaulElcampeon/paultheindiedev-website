package com.paultheindiedev.paultheindiedevwebsite.services;

import com.paultheindiedev.paultheindiedevwebsite.models.CreateProjectRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.Project;
import com.paultheindiedev.paultheindiedevwebsite.models.ProjectsFolder;
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
}
