package com.example.Enterprise_Project.repository;

import com.example.Enterprise_Project.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepository extends MongoRepository<Admin, String> {
}
