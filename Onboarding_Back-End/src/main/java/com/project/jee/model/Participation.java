package com.project.jee.model;

import java.io.Serializable;
import java.util.Comparator;
import java.util.Date;

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
@Table(name="Participation")
public class Participation implements Serializable,Comparable<Participation> {
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="idEmploye")
	private Employe employe;
	@ManyToOne
	@JoinColumn(name="idEvenement")
	private Evenement evenement;
	@NotNull
	@Temporal(TemporalType.DATE)
	private Date dateParticipation;
	
	public Participation() {
		super();
	}
	public Participation(int id, Employe employe, Evenement evenement, Date dateParticipation) {
		super();
		this.id = id;
		this.employe = employe;
		this.evenement = evenement;
		this.dateParticipation = dateParticipation;
	}
	public Participation(Employe employe, Evenement evenement, Date dateParticipation) {
		super();
		this.employe = employe;
		this.evenement = evenement;
		this.dateParticipation = dateParticipation;
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
	public void setEmploye(Employe employe) {
		this.employe = employe;
	}
	public Evenement getEvenement() {
		return evenement;
	}
	public void setEvenement(Evenement evenement) {
		this.evenement = evenement;
	}
	public Date getDateParticipation() {
		return dateParticipation;
	}
	public void setDateParticipation(Date dateParticipation) {
		this.dateParticipation = dateParticipation;
	}
	@Override
	public String toString() {
		return "Participation [id=" + id + ", employe=" + employe + ", evenement=" + evenement + ", DateParticipation="
				+ dateParticipation + "]";
	}

	@Override
	public int compareTo(Participation o) {
		Date date1 = this.getEvenement().getDateDebut();
		Date date2 = o.getEvenement().getDateDebut();

	       if (date1.after(date2)) {
	           return 1;
	       } else if (date1.before(date2)){
	           return -1;
	       } else {
	           return 0;
	       }
	}
	
}
