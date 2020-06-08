package com.project.jee.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.jee.dao.RessourceHumaineDao;
import com.project.jee.model.RessourceHumaine;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class RessourceHumaineController {
	@Autowired
	private RessourceHumaineDao rhDao;
	
	@PostMapping("/checkEmailRH")
	public RessourceHumaine CheckEmailRH(@RequestBody RessourceHumaine user) throws IOException {
		List<RessourceHumaine> listM=(List<RessourceHumaine>)rhDao.findAll();
		RessourceHumaine l=new RessourceHumaine();
		for(RessourceHumaine i:listM){
			if(i.getEmail().equals(user.getEmail())) {
				return i;
			}
		}
	return l;
	}
	@RequestMapping("/RessourceHumaineList")
	 public List<RessourceHumaine> getRessourceHumaines() throws IOException{
	     List<RessourceHumaine> listRessourceHumaines = (List<RessourceHumaine>) rhDao.findAll();
	     return listRessourceHumaines;
	 }
	@DeleteMapping("/RessourceHumaine/{id}")
	public boolean deleteRH(@PathVariable Integer id) {
		rhDao.delete(id);
		return true;
	}

	@PutMapping("/RessourceHumaine")
	public RessourceHumaine updateRH(@RequestBody RessourceHumaine user) {
		return rhDao.save(user);
	}

	@PostMapping("/RessourceHumaine")
	public RessourceHumaine createRH(@RequestBody RessourceHumaine user) {
		return rhDao.save(user);
	}
}
