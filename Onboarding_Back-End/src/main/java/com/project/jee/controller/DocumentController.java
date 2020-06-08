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

import com.project.jee.dao.DocumentDao;
import com.project.jee.model.Document;
import com.project.jee.model.Employe;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class DocumentController {
	@Autowired
	private DocumentDao documentDao;
	
	@RequestMapping("/DocumentList")
	 public List<Document> getdocuments() throws IOException{
	     List<Document> listdocuments = (List<Document>) documentDao.findAll();
	     return listdocuments;
	 }
	@RequestMapping("/DocumentNonRendu")
	 public List<Document> getdocumentsNonRendu() throws IOException{
		List<Document> listdocumentsNonRendu = new ArrayList<Document>();
	    List<Document> listdocuments = (List<Document>) documentDao.findAll();
	     for(Document i:listdocuments){
		    	if(i.getIsValide()==false) {
		    		listdocumentsNonRendu.add(i);
		    	}
		    }
	     return listdocumentsNonRendu;
	 }
	@RequestMapping("/DocumentNotify")
	 public List<Document> getdocumentsNotify(@RequestBody Employe employe) throws IOException{
		List<Document> listdocumentsNotify = new ArrayList<Document>();
	    List<Document> listdocuments = (List<Document>) documentDao.findAll();
	     for(Document i:listdocuments){
		    	if(i.getEmploye().getId()==employe.getId() && i.getNotifier()==true && i.getIsValide()==false) {
		    		listdocumentsNotify.add(i);
		    	}
		    }
	     return listdocumentsNotify;
	 }
	@RequestMapping("/NotifyEmploye")
	 public Document notifyEmploye(@RequestBody Document document) throws IOException{
		Document documentupdated = document;
		documentupdated.setNotifier(true);
	     return documentDao.save(documentupdated);
	 }
	@RequestMapping("/StatistiqueDocumentNonRendu")
	public int StatistiqueDocumentNonRendu() throws IOException {
		List<Document> listdocumentsNonRendu =this.getdocumentsNonRendu();
		return listdocumentsNonRendu.size();
	}
	@RequestMapping("/StatistiqueDocumentRendu")
	public int StatistiqueDocumentRendu() throws IOException {
		List<Document> listdocumentsRendu = new ArrayList<Document>();
	    List<Document> listdocuments = (List<Document>) documentDao.findAll();
	     for(Document i:listdocuments){
		    	if(i.getIsValide()==true) {
		    		listdocumentsRendu.add(i);
		    	}
		    }
		return listdocumentsRendu.size();
	}
	@RequestMapping("/StatistiqueDocumentRenduByEmploye")
	public int StatistiqueDocumentRenduByEmploye(@RequestBody Employe employe) throws IOException {
		List<Document> listdocumentsRendu = new ArrayList<Document>();
	    List<Document> listdocuments = (List<Document>) documentDao.findAll();
	     for(Document i:listdocuments){
		    	if(i.getNotifier()==true && i.getEmploye().getId()==employe.getId()) {
		    		listdocumentsRendu.add(i);
		    	}
		    }
		return listdocumentsRendu.size();
	}
	@DeleteMapping("/Document/{id}")
	public boolean deletedocument(@PathVariable Integer id) {
		documentDao.delete(id);
		return true;
	}

	@PutMapping("/Document")
	public Document updatedocument(@RequestBody Document user) {
		return documentDao.save(user);
	}

	@PostMapping("/Document")
	public Document createdocument(@RequestBody Document user) {
		return documentDao.save(user);
	}
}
