package com.example.Enterprise_Project.controller;

import com.example.Enterprise_Project.model.Movie;
import com.example.Enterprise_Project.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    private MovieService movieService;

    @PostMapping("/addMovie")
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie){
        return new ResponseEntity<Movie>(movieService.addMovie(movie), HttpStatus.CREATED);
    }

    @GetMapping("/getAllMovies")
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }
}
