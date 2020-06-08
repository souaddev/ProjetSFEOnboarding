package com.project.jee.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.jee.model.Manager;

public interface ManagerDao extends JpaRepository<Manager, Integer>{

}
