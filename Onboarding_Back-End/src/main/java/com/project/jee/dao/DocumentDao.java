package com.project.jee.dao;

import org.springframework.data.repository.CrudRepository;

import com.project.jee.model.Document;

public interface DocumentDao extends CrudRepository<Document, Integer>{

}
