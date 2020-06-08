package com.project.jee.model;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Equipe")
public class Equipe implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotNull
	private String service;
	@JsonIgnore
	@OnDelete(action = OnDeleteAction.CASCADE)
	@OneToMany(mappedBy = "equipe")
	private Collection<Employe> employe;
	@OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "idManager", referencedColumnName = "id")
    private Manager manager;
	
	public Equipe() {
	}
	public Equipe(int id, String service, Manager manager) {
		this.id = id;
		this.service = service;
		this.manager = manager;
	}
	public Equipe(String service, Manager manager) {
		this.service = service;
		this.manager = manager;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public Collection<Employe> getEmploye() {
		return employe;
	}
	public void setEmploye(Collection<Employe> employe) {
		this.employe = employe;
	}
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	@Override
	public String toString() {
		return "Equipe [id=" + id + ", service=" + service + ", manager=" + manager + "]";
	}
	

}
