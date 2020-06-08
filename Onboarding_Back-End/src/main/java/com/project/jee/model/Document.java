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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Document")
public class Document implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotNull
	private String label;
	@Temporal(TemporalType.DATE)
	private Date dateRendu;
	@Column(columnDefinition = "boolean default false")
	@NotNull
	private Boolean isValide;
	@Column(columnDefinition = "boolean default false")
	@NotNull
	private Boolean notifier;
	@ManyToOne
	@JoinColumn(name="idEmployé")
	private Employe employe;
	public Document() {
		super();
	}
	public Document(String label, Date dateRendu, Boolean isValide,Boolean notifier, Employe employe) {
		super();
		this.label = label;
		this.dateRendu = dateRendu;
		this.isValide = isValide;
		this.employe = employe;
		this.notifier=notifier;
	}
	
	public Document(int id, String label, Date dateRendu, Boolean isValide,Boolean notifier, Employe employe) {
		super();
		this.id = id;
		this.label = label;
		this.dateRendu = dateRendu;
		this.isValide = isValide;
		this.employe = employe;
		this.notifier=notifier;
	}
	public Boolean getNotifier() {
		return notifier;
	}
	public void setNotifier(Boolean notifier) {
		this.notifier = notifier;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public Date getDateRendu() {
		return dateRendu;
	}
	public void setDateRendu(Date dateRendu) {
		this.dateRendu = dateRendu;
	}
	public Boolean getIsValide() {
		return isValide;
	}
	public void setIsValide(Boolean isValide) {
		this.isValide = isValide;
	}
	public Employe getEmploye() {
		return employe;
	}
	public void setEmploye(Employe employe) {
		this.employe = employe;
	}
	@Override
	public String toString() {
		return "Document [id=" + id + ", label=" + label + ", dateRendu=" + dateRendu + ", isValide=" + isValide
				+ ", employe=" + employe + "]";
	}
	
}
