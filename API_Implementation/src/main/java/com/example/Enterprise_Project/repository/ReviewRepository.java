package com.example.Enterprise_Project.repository;

import com.example.Enterprise_Project.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, String> {
    List<Review> findByContentId(String contentId);
}
