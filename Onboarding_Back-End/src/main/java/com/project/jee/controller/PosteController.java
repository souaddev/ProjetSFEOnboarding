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

import com.project.jee.dao.PosteDao;
import com.project.jee.model.Equipe;
import com.project.jee.model.Poste;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class PosteController {
	@Autowired
	private PosteDao posteDao;
	
	@RequestMapping("/PosteList")
	 public List<Poste> getPostes() throws IOException{
	     List<Poste> listPostes = (List<Poste>) posteDao.findAll();
	     return listPostes;
	 }
	@RequestMapping("/StatistiqueNombrePoste")
	 public int statistiquePoste() throws IOException{
	     List<Poste> listPostes = (List<Poste>) posteDao.findAll();
	     return listPostes.size();
	 }
	@DeleteMapping("/Poste/{id}")
	public boolean deletePoste(@PathVariable Integer id) {
		posteDao.delete(id);
		return true;
	}

	@PutMapping("/Poste")
	public Poste updatePoste(@RequestBody Poste user) {
		return posteDao.save(user);
	}

	@PostMapping("/Poste")
	public Poste createPoste(@RequestBody Poste user) {
		return posteDao.save(user);
	}
}
