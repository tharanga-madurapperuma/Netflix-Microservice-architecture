package com.example.Enterprise_Project.controller;

import com.example.Enterprise_Project.model.Documentary;
import com.example.Enterprise_Project.model.Movie;
import com.example.Enterprise_Project.service.DocumentaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DocumentaryController {

    @Autowired
    private DocumentaryService documentaryService;

    @PostMapping("/addDoc")
    public ResponseEntity<Documentary> addDoc(@RequestBody Documentary documentary){
        return new ResponseEntity<Documentary>(documentaryService.addDoc(documentary), HttpStatus.CREATED);
    }

    @GetMapping("/getAllDocs")
    public List<Documentary> getAllDocs(){
        return documentaryService.getAllDocs();
    }

    @GetMapping("/getDocById/{doc_id}")
    public ResponseEntity<Documentary> getDocById(@PathVariable("doc_id") String doc_id){
        return new ResponseEntity<Documentary>(documentaryService.getDocById(doc_id), HttpStatus.CREATED);
    }
}
