package com.project.jee.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Evenement")
public class Evenement implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotNull
	private String type;
	@NotNull
	private String nom;
	private String description;
	private String lieu;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm",timezone="GMT+01")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateDebut;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm", timezone="GMT+01")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateFin;
	@JsonIgnore
	@OneToMany(mappedBy = "evenement")
	private Collection<Participation> participations;
	@ManyToOne
	@JoinColumn(name = "idManager")
	private Manager manager;
	
	public Evenement() {
		super();
	}
	public Evenement(int id, String type, String nom, String description, String lieu, Date dateDebut, Date dateFin,
			Manager manager) {
		super();
		this.id = id;
		this.type = type;
		this.nom = nom;
		this.description = description;
		this.lieu = lieu;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.manager = manager;
	}
	public Evenement(String type, String nom, String description, String lieu, Date dateDebut, Date dateFin,
			Manager manager) {
		super();
		this.type = type;
		this.nom = nom;
		this.description = description;
		this.lieu = lieu;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.manager = manager;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLieu() {
		return lieu;
	}
	public void setLieu(String lieu) {
		this.lieu = lieu;
	}
	public Date getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}
	public Date getDateFin() {
		return dateFin;
	}
	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "Evenement [id=" + id + ", type=" + type + ", nom=" + nom + ", description=" + description + ", lieu="
				+ lieu + ", dateDebut=" + dateDebut + ", dateFin=" + dateFin
				+ ", manager=" + manager + "]";
	}
	
}
