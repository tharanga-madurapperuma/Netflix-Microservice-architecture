package com.example.Enterprise_Project.repository;

import com.example.Enterprise_Project.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MovieRepository extends MongoRepository<Movie, String> {
}
