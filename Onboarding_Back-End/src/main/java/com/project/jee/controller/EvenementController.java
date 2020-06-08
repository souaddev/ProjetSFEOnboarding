package com.project.jee.controller;

import java.io.IOException;
import java.util.ArrayList;
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

import com.project.jee.dao.EvenementDao;
import com.project.jee.model.Evenement;
import com.project.jee.model.Manager;
import com.project.jee.model.Evenement;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class EvenementController {
	@Autowired
	private EvenementDao eventDao;
	
	@RequestMapping("/EvenementListByManager")
	 public List<Evenement> getEvenementsByManager(@RequestBody Manager manager) throws IOException{
		List<Evenement> listEvenementsByManager = new ArrayList<Evenement>();
	    List<Evenement> listEvenements = (List<Evenement>) eventDao.findAll();
	    for(Evenement i:listEvenements){
	    	if(i.getManager().getId()==manager.getId()) {
	    		listEvenementsByManager.add(i);
	    	}
	    }
	     return listEvenementsByManager;
	 }
	@RequestMapping("/EvenementList")
	 public List<Evenement> getEvenements() throws IOException{
	     List<Evenement> listEvenements = (List<Evenement>) eventDao.findAll();
	     return listEvenements;
	 }
	@RequestMapping("/StatistiqueNombreEvenement")
	 public int statistiquePoste(@RequestBody Manager manager) throws IOException{
	     List<Evenement> listEvenementsByManager = getEvenementsByManager(manager);
	     return listEvenementsByManager.size();
	 }
	@DeleteMapping("/Evenement/{id}")
	public boolean deleteEvenement(@PathVariable Integer id) {
		eventDao.delete(id);
		return true;
	}

	@PutMapping("/Evenement")
	public Evenement updateEvenement(@RequestBody Evenement user) {
		return eventDao.save(user);
	}

	@PostMapping("/Evenement")
	public Evenement createEvenement(@RequestBody Evenement user) {
		return eventDao.save(user);
	}
}
