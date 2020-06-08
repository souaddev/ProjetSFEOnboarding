package com.project.jee.model;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="Manager")
public class Manager implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotNull
	private String nom;
	@NotNull
	private String prenom;
	@Email
	@NotBlank
	private String email;
	@NotNull
	private String motPasse;
	@OneToOne(mappedBy = "manager")
	private Equipe service;
	@JsonIgnore
	@OneToMany(mappedBy = "manager")
	private Collection<DemandeMoyen> demandeMoyens;
	public Collection<DemandeMoyen> getDemandeMoyens() {
		return demandeMoyens;
	}
	public void setDemandeMoyens(Collection<DemandeMoyen> demandeMoyens) {
		this.demandeMoyens = demandeMoyens;
	}
	@JsonIgnore
	@OneToMany(mappedBy = "manager")
	private Collection<Evenement> evenement;
	
	public Collection<Evenement> getEvenement() {
		return evenement;
	}
	public void setEvenement(Collection<Evenement> evenement) {
		this.evenement = evenement;
	}
	public Manager() {
		super();
	}
	public Manager(int id, String nom, String prenom, String email, String motPasse) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.motPasse = motPasse;
	}
	public Manager(String nom, String prenom, String email, String motPasse) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.motPasse = motPasse;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMotPasse() {
		return motPasse;
	}
	public void setMotPasse(String motPasse) {
		this.motPasse = motPasse;
	}
	@Override
	public String toString() {
		return "Manager [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", motPasse="
				+ motPasse + "]";
	}
}
