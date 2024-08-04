package com.example.Enterprise_Project.repository;

import com.example.Enterprise_Project.model.TVSeries;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TVSeriesRepository extends MongoRepository<TVSeries, String> {
}
