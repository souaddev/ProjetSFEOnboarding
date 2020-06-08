package com.project.jee.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.project.jee.dao.ManagerDao;
import com.project.jee.model.Manager;
import com.project.jee.model.Manager;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class ManagerController {
	@Autowired
	private ManagerDao managerDao;
	 @Bean
	    public WebMvcConfigurer corsConfigurer() {
	        return new org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter() {
	            @Override
	            public void addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry registry) {
	                registry.addMapping("/**").allowedOrigins("*");
	            }
	        };
	    }
	@PostMapping("/checkEmail")
	public Manager CheckEmail(@RequestBody Manager user) throws IOException {
		List<Manager> listM=(List<Manager>)managerDao.findAll();
		Manager l=new Manager();
		for(Manager i:listM){
			if(i.getEmail().equals(user.getEmail())) {
				return i;
			}
		}
	return l;
	}
	@RequestMapping("/managerList")
	 public List<Manager> getManagers() throws IOException{
	     List<Manager> listManagers = (List<Manager>) managerDao.findAll();
	     return listManagers;
	 }
	@RequestMapping("/StatistiqueNombreManager")
	 public int statistiquePoste() throws IOException{
	     List<Manager> listManagers = getManagers();
	     return listManagers.size();
	 }
	@DeleteMapping("/manager/{id}")
	public boolean deleteManager(@PathVariable Integer id) {
		managerDao.delete(id);
		return true;
	}

	@PutMapping("/manager")
	public Manager updateManager(@RequestBody Manager user) {
		return managerDao.save(user);
	}

	@PostMapping("/manager")
	public Manager createManager(@RequestBody Manager user) {
		return managerDao.save(user);
	}

}
