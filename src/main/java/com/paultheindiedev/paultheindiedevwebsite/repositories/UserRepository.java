package com.paultheindiedev.paultheindiedevwebsite.repositories;

import com.paultheindiedev.paultheindiedevwebsite.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
}
