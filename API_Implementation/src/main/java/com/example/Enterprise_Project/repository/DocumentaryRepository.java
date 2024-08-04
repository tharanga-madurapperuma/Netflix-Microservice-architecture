package com.example.Enterprise_Project.repository;

import com.example.Enterprise_Project.model.Documentary;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocumentaryRepository extends MongoRepository<Documentary, String> {
}
