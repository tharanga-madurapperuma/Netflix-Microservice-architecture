package com.example.Enterprise_Project.repository;

import com.example.Enterprise_Project.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MovieRepository extends MongoRepository<Movie, Long> {
}
