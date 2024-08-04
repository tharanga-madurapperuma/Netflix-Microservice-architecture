package com.example.Enterprise_Project.repository;

import com.example.Enterprise_Project.model.GUser;
import com.example.Enterprise_Project.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GUserRepository extends MongoRepository<GUser, String> {
    GUser findByEmail(String email);
}
