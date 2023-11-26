package com.eic.userservice.repository;

import com.eic.userservice.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {
    User findByemailID(String emailID);
}
