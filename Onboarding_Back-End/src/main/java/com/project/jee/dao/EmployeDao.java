package com.project.jee.dao;

import org.springframework.data.repository.CrudRepository;

import com.project.jee.model.Employe;

public interface EmployeDao extends CrudRepository<Employe, Integer> {

}
