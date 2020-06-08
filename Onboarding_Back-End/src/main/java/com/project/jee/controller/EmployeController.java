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

import com.project.jee.dao.EmployeDao;
import com.project.jee.model.Employe;
import com.project.jee.model.Manager;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class EmployeController {
	@Autowired
	private EmployeDao employeDao;
	HashMap<Employe,Date> map=new HashMap<Employe,Date>();
	
	@PostMapping("/checkEmailEmploye")
	public Employe CheckEmailEmploye(@RequestBody Employe user) throws IOException {
		List<Employe> listM=(List<Employe>)employeDao.findAll();
		Employe l=new Employe();
		for(Employe i:listM){
			if(i.getEmail().equals(user.getEmail())) {
				return i;
			}
		}
	return l;
	}
	//@JsonView(View.Summary.class)
	@RequestMapping("/EmployeList")
	 public List<Employe> getEmployes() throws IOException{
	     List<Employe> listEmployes = (List<Employe>) employeDao.findAll();
	     return listEmployes;
	 }
	@RequestMapping("/EmployeListInEquipe")
	 public List<Employe> getEmployesEquipe(@RequestBody Employe employe) throws IOException{
		List<Employe> listEmployes = new ArrayList<Employe>();
	    List<Employe> listEmployesByEquipe = (List<Employe>) employeDao.findAll();
	    for(Employe i:listEmployesByEquipe){
	    	if(i.getEquipe().getId()==employe.getEquipe().getId()) {
	    		listEmployes.add(i);
	    	}
	    }
	     return listEmployes;
	 }
	@RequestMapping("/EmployeListByManager")
	 public List<Employe> getEmployesByManager(@RequestBody Manager manager) throws IOException{
		List<Employe> listEmployesByManager = new ArrayList<Employe>();
	    List<Employe> listEmployes = (List<Employe>) employeDao.findAll();
	    for(Employe i:listEmployes){
	    	if(i.getEquipe().getManager().getId()==manager.getId()) {
	    		listEmployesByManager.add(i);
	    	}
	    }
	     return listEmployesByManager;
	 }
	@RequestMapping("/StatistiqueNombreEmployeHR")
	 public int StatistiqueNombreEmployeHR() throws IOException{
	     List<Employe> listEmployes = (List<Employe>) employeDao.findAll();
	     return listEmployes.size();
	 }
	@RequestMapping("/StatistiqueNombreEmployeManager")
	 public int StatistiqueNombreEmployeHR(@RequestBody Manager manager) throws IOException{
	     List<Employe> listEmployes = getEmployesByManager(manager);
	     return listEmployes.size();
	 }
	@RequestMapping("/StatistiqueNombreEmployeEquipe")
	 public int StatistiqueNombreEmployeEquipe(@RequestBody Employe employe) throws IOException{
	     List<Employe> listEmployes = getEmployesEquipe(employe);
	     return listEmployes.size();
	 }
	@DeleteMapping("/Employe/{id}")
	public boolean deleteEmploye(@PathVariable Integer id) {
		employeDao.delete(id);
		return true;
	}

	@PutMapping("/Employe")
	public Employe updateEmploye(@RequestBody Employe user) {
		return employeDao.save(user);
	}

	@PostMapping("/Employe")
	public Employe createEmploye(@RequestBody Employe user) {
		map.put(user, new Date());
		return employeDao.save(user);
	}
	@RequestMapping("/NouveauEmployeNotification")
	public List<Employe> getNotificationNewEmploye(@RequestBody Employe currentEmploye) {
		
		List<Employe> listEmployesNotify = new ArrayList<Employe>();
	    List<Employe> listEmployes = (List<Employe>) employeDao.findAll();
	    for(Employe i:listEmployes){
	    	if(i.getEquipe().getId()==currentEmploye.getEquipe().getId() && i.getId()!=currentEmploye.getId() && i.getDateRecrutement().after(currentEmploye.getDateRecrutement())) {
	    		listEmployesNotify.add(i);
	    	}
	    }
	    Collections.sort(listEmployesNotify);
	     return listEmployesNotify;
	}
}
