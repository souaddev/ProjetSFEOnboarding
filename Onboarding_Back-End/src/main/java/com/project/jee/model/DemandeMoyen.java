package com.project.jee.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
@Entity
@Table(name="DemandeMoyen")
public class DemandeMoyen implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="idEmployé")
	private Employe employe;
	@ManyToOne
	@JoinColumn(name="idMoyen")
	private Moyen moyen;
	@ManyToOne
	@JoinColumn(name = "idManager")
	private Manager manager;
	@NotNull
	@Temporal(TemporalType.DATE)
	private Date dateDemande;
	@Column(columnDefinition = "boolean default false")
	@NotNull
	private Boolean valide;
	
	public DemandeMoyen() {
		super();
	}
	public DemandeMoyen(int id, Employe employe, Manager manager,Moyen moyen, Date dateDemande, Boolean valide) {
		super();
		this.id = id;
		this.employe = employe;
		this.moyen = moyen;
		this.dateDemande = dateDemande;
		this.valide = valide;
		this.manager=manager;
	}
	public DemandeMoyen(Employe employe,Manager manager, Moyen moyen, Date dateDemande, Boolean valide) {
		super();
		this.employe = employe;
		this.moyen = moyen;
		this.dateDemande = dateDemande;
		this.valide = valide;
		this.manager=manager;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Employe getEmploye() {
		return employe;
	}
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	public void setEmploye(Employe employe) {
		this.employe = employe;
	}
	public Moyen getMoyen() {
		return moyen;
	}
	public void setMoyen(Moyen moyen) {
		this.moyen = moyen;
	}
	public Date getDateDemande() {
		return dateDemande;
	}
	public void setDateDemande(Date dateDemande) {
		this.dateDemande = dateDemande;
	}
	public Boolean getValide() {
		return valide;
	}
	public void setValide(Boolean valide) {
		this.valide = valide;
	}
	@Override
	public String toString() {
		return "DemandeMoyen [id=" + id + ", employe=" + employe + ", moyen=" + moyen + ", dateDemande=" + dateDemande
				+ ", valide=" + valide + "]";
	}
	
}
