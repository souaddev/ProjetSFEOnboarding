package com.project.jee.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
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

import com.project.jee.dao.DemandeMoyenDao;
import com.project.jee.model.DemandeMoyen;
import com.project.jee.model.Employe;
import com.project.jee.model.Manager;
import com.project.jee.model.Moyen;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class DemandeMoyenController {
	@Autowired
	private DemandeMoyenDao DemandeMoyenDao;
	
	@RequestMapping("/DemandeMoyenListByManager")
	 public List<DemandeMoyen> getDemandeMoyensByManager(@RequestBody Manager manager) throws IOException{
		List<DemandeMoyen> listDemandeMoyensByManager = new ArrayList<DemandeMoyen>();
	    List<DemandeMoyen> listDemandeMoyens = (List<DemandeMoyen>) DemandeMoyenDao.findAll();
	    for(DemandeMoyen i:listDemandeMoyens){
	    	if(i.getManager().getId()==manager.getId()) {
	    		listDemandeMoyensByManager.add(i);
	    	}
	    }
	     return listDemandeMoyensByManager;
	 }
	
	@RequestMapping("/DemandeMoyenList")
	 public List<DemandeMoyen> getDemandeMoyens() throws IOException{
	     List<DemandeMoyen> listDemandeMoyens = (List<DemandeMoyen>) DemandeMoyenDao.findAll();
	     return listDemandeMoyens;
	 }
	
	@RequestMapping("/StatistiqueDemandeMoyenManager")
	 public int StatistiqueNombreDemandeMoyensByManager(@RequestBody Manager manager) throws IOException{
	     List<DemandeMoyen> listDemandeMoyens = getDemandeMoyensByManager(manager);
	     return listDemandeMoyens.size();
	 }
	
	@DeleteMapping("/DemandeMoyen/{id}")
	public boolean deleteDemandeMoyen(@PathVariable Integer id) {
		DemandeMoyenDao.delete(id);
		return true;
	}

	@PutMapping("/DemandeMoyen")
	public DemandeMoyen updateDemandeMoyen(@RequestBody DemandeMoyen user) {
		return DemandeMoyenDao.save(user);
	}

	@PostMapping("/DemandeMoyen")
	public DemandeMoyen createDemandeMoyen(@RequestBody DemandeMoyen user) {
		return DemandeMoyenDao.save(user);
	}
	
	@PostMapping("/CreateDemande/{employe}/{manager}/{moyens}")
	public DemandeMoyen createDemandeMoyenAll(@RequestBody Employe employe,@RequestBody Manager manager,@RequestBody List<Moyen> moyens) {
		DemandeMoyen demandeMoyen=new DemandeMoyen();
		demandeMoyen.setEmploye(employe);
		demandeMoyen.setManager(manager);
		demandeMoyen.setValide(false);
		demandeMoyen.setDateDemande(new Date());
		for(Moyen i:moyens) {
			demandeMoyen.setMoyen(i);
			return DemandeMoyenDao.save(demandeMoyen);
		}
		return demandeMoyen;
	}
}
