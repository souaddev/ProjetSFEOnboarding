package com.project.jee.dao;

import org.springframework.data.repository.CrudRepository;

import com.project.jee.model.Evenement;

public interface EvenementDao extends CrudRepository<Evenement, Integer>{

}
