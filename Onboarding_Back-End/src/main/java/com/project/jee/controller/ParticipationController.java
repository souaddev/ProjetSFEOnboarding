package com.project.jee.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
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

import com.project.jee.dao.ParticipationDao;
import com.project.jee.model.Participation;
import com.project.jee.model.Poste;
import com.project.jee.model.Employe;
import com.project.jee.model.Manager;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class ParticipationController {
	@Autowired
	private ParticipationDao participationDao;
	@RequestMapping("/Agenda")
	 public List<Participation> Agenda(@RequestBody Employe employe) throws IOException{
		List<Participation> agenda = new ArrayList<Participation>();
	    List<Participation> listParticipations = (List<Participation>) participationDao.findAll();
	    for(Participation i:listParticipations){
	    	if(i.getEmploye().getId()==employe.getId() && ( i.getEvenement().getDateFin().after(new Date()) || i.getEvenement().getDateDebut().equals(new Date()) )) {
	    		agenda.add(i);
	    	}
	    }
	    Collections.sort(agenda);
	     return agenda;
	 }

	@RequestMapping("/listParticipationByManager")
	 public List<Participation> getParticipationsByManager(@RequestBody Manager manager) throws IOException{
		List<Participation> listParticipationsByManager = new ArrayList<Participation>();
	    List<Participation> listParticipations = (List<Participation>) participationDao.findAll();
	    for(Participation i:listParticipations){
	    	if(i.getEvenement().getManager().getId()==manager.getId()) {
	    		listParticipationsByManager.add(i);
	    	}
	    }
	     return listParticipationsByManager;
	 }
	@RequestMapping("/ParticipationList")
	 public List<Participation> getParticipations() throws IOException{
	     List<Participation> listParticipations = (List<Participation>) participationDao.findAll();
	     return listParticipations;
	 }
	@RequestMapping("/StatistiqueNombreParticipationManager")
	 public int statistiqueParticipationManager(@RequestBody Manager manager) throws IOException{
	     List<Participation> listParticipationsByManager = getParticipationsByManager(manager);
	     return listParticipationsByManager.size();
	 }
	@RequestMapping("/StatistiqueNombreParticipationEmploye")
	 public int statistiqueParticipationEmploye(@RequestBody Employe employe) throws IOException{
	     List<Participation> listParticipationsByEmploye = Agenda(employe);
	     return listParticipationsByEmploye.size();
	 }
	@DeleteMapping("/Participation/{id}")
	public boolean deleteParticipation(@PathVariable Integer id) {
		participationDao.delete(id);
		return true;
	}

	@PutMapping("/Participation")
	public Participation updateParticipation(@RequestBody Participation user) {
		return participationDao.save(user);
	}

	@PostMapping("/Participation")
	public Participation createParticipation(@RequestBody Participation user) {
		user.setDateParticipation(new Date());
		return participationDao.save(user);
	}
}
