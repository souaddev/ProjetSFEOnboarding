package com.project.jee.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name="RessourceHumaine")
public class RessourceHumaine implements Serializable{
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
	
	public RessourceHumaine() {
		super();
	}
	public RessourceHumaine(int id, String nom, String prenom, String email, String motPasse) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.motPasse = motPasse;
	}
	public RessourceHumaine(String nom, String prenom, String email, String motPasse) {
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
		return "RessourceHumaine [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", motPasse="
				+ motPasse + "]";
	}
	
}
