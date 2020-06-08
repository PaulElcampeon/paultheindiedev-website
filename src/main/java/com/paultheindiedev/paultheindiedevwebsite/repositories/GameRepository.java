package com.paultheindiedev.paultheindiedevwebsite.repositories;

import com.paultheindiedev.paultheindiedevwebsite.models.GamesFolder;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends MongoRepository<GamesFolder, String> {
}
