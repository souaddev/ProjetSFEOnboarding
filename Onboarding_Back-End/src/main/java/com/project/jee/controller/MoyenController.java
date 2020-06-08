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

import com.project.jee.dao.MoyenDao;
import com.project.jee.model.Employe;
import com.project.jee.model.Manager;
import com.project.jee.model.Moyen;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class MoyenController {
	@Autowired
	private MoyenDao MoyenDao;
	
	@RequestMapping("/MoyenList")
	 public List<Moyen> getMoyens() throws IOException{
	     List<Moyen> listMoyens = (List<Moyen>) MoyenDao.findAll();
	     return listMoyens;
	 }
	@RequestMapping("/StatistiqueNombreMoyen")
	 public int StatistiqueNombreEmployeHR() throws IOException{
	     List<Moyen> listMoyens = getMoyens();
	     return listMoyens.size();
	 }
	@DeleteMapping("/Moyen/{id}")
	public boolean deleteMoyen(@PathVariable Integer id) {
		MoyenDao.delete(id);
		return true;
	}

	@PutMapping("/Moyen")
	public Moyen updateMoyen(@RequestBody Moyen user) {
		return MoyenDao.save(user);
	}

	@PostMapping("/Moyen")
	public Moyen createMoyen(@RequestBody Moyen user) {
		return MoyenDao.save(user);
	}
}
