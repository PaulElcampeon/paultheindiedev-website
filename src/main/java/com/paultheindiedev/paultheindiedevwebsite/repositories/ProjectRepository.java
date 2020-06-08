package com.paultheindiedev.paultheindiedevwebsite.repositories;

import com.paultheindiedev.paultheindiedevwebsite.models.ProjectsFolder;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<ProjectsFolder, String> {
}
