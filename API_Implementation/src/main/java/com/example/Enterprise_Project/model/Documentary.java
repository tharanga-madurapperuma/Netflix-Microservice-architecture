package com.example.Enterprise_Project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@EqualsAndHashCode(callSuper = true)
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Documentary extends Content{
    @Id
    private String doc_id;
    public int watch_time;
}
