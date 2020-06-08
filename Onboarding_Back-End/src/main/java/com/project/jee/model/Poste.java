package com.project.jee.model;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Poste")
public class Poste implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotNull
	private String NomPoste;
	@NotNull
	private String Type;
	private String description;
	@JsonIgnore
	@OneToMany(mappedBy = "poste")
	private Collection<Employe> employes;
	
	public Poste() {
		super();
	}
	public Poste(int id, String nomPoste, String type, String description) {
		super();
		this.id = id;
		NomPoste = nomPoste;
		Type = type;
		this.description = description;
	}
	public Poste(String nomPoste, String type, String description) {
		super();
		NomPoste = nomPoste;
		Type = type;
		this.description = description;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNomPoste() {
		return NomPoste;
	}
	public void setNomPoste(String nomPoste) {
		NomPoste = nomPoste;
	}
	public String getType() {
		return Type;
	}
	public void setType(String type) {
		Type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Collection<Employe> getEmployes() {
		return employes;
	}
	public void setEmployes(Collection<Employe> employes) {
		this.employes = employes;
	}
	@Override
	public String toString() {
		return "Poste [id=" + id + ", NomPoste=" + NomPoste + ", Type=" + Type + ", description=" + description
				+ "]";
	}
	
}
