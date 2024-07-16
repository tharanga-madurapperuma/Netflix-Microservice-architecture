package com.example.Enterprise_Project.service;

import com.example.Enterprise_Project.model.DatabaseSequence;
import com.example.Enterprise_Project.model.Movie;
import com.example.Enterprise_Project.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public Movie addMovie(Movie movie){
        movie.setMovie_id(generateSequence(Movie.SEQUENCE_NAME));
        return movieRepository.save(movie);
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    @Autowired
    private MongoOperations mongoOperations;

    public long generateSequence(String seqName) {
        DatabaseSequence counter = mongoOperations.findAndModify(query(where("_id").is(seqName)),
                new Update().inc("seq",1), options().returnNew(true).upsert(true),
                DatabaseSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;
    }
}
