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

import com.project.jee.dao.EquipeDao;
import com.project.jee.model.Equipe;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class EquipeController {
	@Autowired
	private EquipeDao equipeDao;
	
	@PostMapping("/checkManager")
	public Equipe CheckEmailEmploye(@RequestBody Equipe equipe) throws IOException {
		List<Equipe> listM=(List<Equipe>)equipeDao.findAll();
		Equipe l=new Equipe();
		for(Equipe i:listM){
			if((i.getManager().getId())==(equipe.getManager().getId()) ){
				return i;
			}
		}
	return l;
	}
	@RequestMapping("/EquipeList")
	 public List<Equipe> getEquipes() throws IOException{
	     List<Equipe> listEquipes = (List<Equipe>) equipeDao.findAll();
	     return listEquipes;
	 }
	@RequestMapping("/StatistiqueNombreEquipe")
	 public int statistiqueEquipe() throws IOException{
	     List<Equipe> listEquipes = (List<Equipe>) equipeDao.findAll();
	     return listEquipes.size();
	 }
	@DeleteMapping("/Equipe/{id}")
	public boolean deleteEquipe(@PathVariable Integer id) {
		equipeDao.delete(id);
		return true;
	}

	@PutMapping("/Equipe")
	public Equipe updateEquipe(@RequestBody Equipe user) {
		return equipeDao.save(user);
	}

	@PostMapping("/EquipeAdd")
	public Equipe createEquipe(@RequestBody Equipe user) {
		return equipeDao.save(user);
	}
}
