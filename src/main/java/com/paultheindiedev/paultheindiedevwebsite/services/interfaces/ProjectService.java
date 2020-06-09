package com.paultheindiedev.paultheindiedevwebsite.services.interfaces;

import com.paultheindiedev.paultheindiedevwebsite.models.CreateProjectRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.UpdateProjectRequest;

public interface ProjectService {

    boolean createProject(CreateProjectRequest createProjectRequest);

    boolean updateProject(UpdateProjectRequest updateProjectRequest);
}
