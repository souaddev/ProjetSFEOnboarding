package com.project.jee.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.jee.dao.EmployeDao;
import com.project.jee.dao.ManagerDao;
import com.project.jee.dao.RessourceHumaineDao;
import com.project.jee.model.Employe;
import com.project.jee.model.Manager;
import com.project.jee.model.RessourceHumaine;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class LoginController {
	@Autowired
	private EmployeDao employeDao;
	@Autowired
	private ManagerDao managerDao;
	@Autowired
	private RessourceHumaineDao rhDao;
	
	@GetMapping("/loginEmploye/{email:.+}")
	public Employe LoginEmploye(@PathVariable String email) throws IOException {
		List<Employe> listM=(List<Employe>)employeDao.findAll();
		Employe l=null;
		for(Employe i:listM){
			if(i.getEmail().equals(email)) {
				return i;
			}
		}
	return l;
	}
	
	@GetMapping("/loginManager/{email:.+}")
	public Manager LoginManager(@PathVariable String email) throws IOException {
		List<Manager> listM=(List<Manager>)managerDao.findAll();
		Manager l=null;
		for(Manager i:listM){
			if(i.getEmail().equals(email)) {
				return i;
			}
		}
	return l;
	}
	
	@GetMapping("/loginRessourceHumaine/{email:.+}")
	public RessourceHumaine LoginRH(@PathVariable String email) throws IOException {
		List<RessourceHumaine> listM=(List<RessourceHumaine>)rhDao.findAll();
		RessourceHumaine l=null;
		for(RessourceHumaine i:listM){
			if(i.getEmail().equals(email)) {
				return i;
			}
		}
	return l;
	}
}
