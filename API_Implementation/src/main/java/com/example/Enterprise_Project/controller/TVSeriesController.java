package com.example.Enterprise_Project.controller;

import com.example.Enterprise_Project.model.Movie;
import com.example.Enterprise_Project.model.TVSeries;
import com.example.Enterprise_Project.service.TVSeriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TVSeriesController {
    @Autowired
    private TVSeriesService tvSeriesService;

    @PostMapping("/addSeries")
    public ResponseEntity<TVSeries> addSeries(@RequestBody TVSeries tvSeries){
        return new ResponseEntity<TVSeries>(tvSeriesService.addSeries(tvSeries), HttpStatus.CREATED);
    }

    @GetMapping("/getAllSeries")
    public List<TVSeries> getAllSeries(){
        return tvSeriesService.getAllSeries();
    }

    @GetMapping("/getSeriesById/{series_id}")
    public ResponseEntity<TVSeries> getSeriesById(@PathVariable("series_id") String series_id){
        return new ResponseEntity<TVSeries>(tvSeriesService.getSeriesById(series_id), HttpStatus.CREATED);
    }
}
