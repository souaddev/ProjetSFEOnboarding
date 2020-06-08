package com.project.jee.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
enum Sexe { femme, homme }
@Entity
@Table(name="Employé")
public class Employe implements Serializable,Comparable<Employe>{
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
	private String cin;
	@NotNull
	private String adresse;
	@NotNull
	private String tel;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Sexe sexe;
	@NotNull
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	@NotNull
	@Temporal(TemporalType.DATE)
	private Date dateRecrutement;
	@NotNull
	private String motPasse;
	@JsonIgnore
	@OneToMany(mappedBy = "employe")
	private Collection<Document> documents;
	@ManyToOne
	@JoinColumn(name="idEquipe")
	private Equipe equipe;
	@ManyToOne
	@JoinColumn(name="idPoste")
	private Poste poste;
	@JsonIgnore
	@OneToMany(mappedBy = "employe")
	private Collection<Participation> participations;
	@JsonIgnore
	@OneToMany(mappedBy = "employe")
	private Collection<DemandeMoyen> demandeMoyens;
	public Employe() {
		super();
	}
	public Employe(String nom, String prenom, String email, String cin, String adresse, String tel, Sexe sexe,
			Date dateNaissance, Date dateRecrutement, String motPasse, Equipe equipe, Poste poste) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.cin = cin;
		this.adresse = adresse;
		this.tel = tel;
		this.sexe = sexe;
		this.dateNaissance = dateNaissance;
		this.dateRecrutement = dateRecrutement;
		this.motPasse = motPasse;
		this.equipe = equipe;
		this.poste = poste;
	}
	public Employe(int id, String nom, String prenom, String email, String cin, String adresse, String tel,Sexe sexe,
			Date dateNaissance, Date dateRecrutement,
			String motPasse, Equipe equipe, Poste poste) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.cin = cin;
		this.adresse = adresse;
		this.tel = tel;
		this.sexe = sexe;
		this.dateNaissance = dateNaissance;
		this.dateRecrutement = dateRecrutement;
		this.motPasse = motPasse;
		this.equipe = equipe;
		this.poste = poste;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getId() {
		return id;
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
	public Sexe getSexe() {
		return sexe;
	}
	public void setSexe(Sexe sexe) {
		this.sexe = sexe;
	}
	public Date getDateNaissance() {
		return dateNaissance;
	}
	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public Date getDateRecrutement() {
		return this.dateRecrutement;
	}
	public void setDateRecrutement(Date dateRecrutement) {
		this.dateRecrutement = dateRecrutement;
	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getMotPasse() {
		return motPasse;
	}
	public void setMotPasse(String motPasse) {
		this.motPasse = motPasse;
	}
	public Collection<DemandeMoyen> getDemandeMoyens() {
		return demandeMoyens;
	}
	public void setDemandeMoyens(Collection<DemandeMoyen> demandeMoyens) {
		this.demandeMoyens = demandeMoyens;
	}
	public Collection<Document> getDocuments() {
		return documents;
	}
	public void setDocuments(Collection<Document> documents) {
		this.documents = documents;
	}
	public Equipe getEquipe() {
		return equipe;
	}
	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}
	public Poste getPoste() {
		return poste;
	}
	public void setPoste(Poste poste) {
		this.poste = poste;
	}
	public Collection<Participation> getParticipations() {
		return participations;
	}
	public void setParticipations(Collection<Participation> participations) {
		this.participations = participations;
	}
	@Override
	public String toString() {
		return "Employé [idEmploye=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", cin="
				+ cin + ", adresse=" + adresse + ", tel=" + tel + ", motPasse=" + motPasse + ", equipe=" + equipe
				+ ", poste=" + poste + "]";
	}
	@Override
	public int compareTo(Employe o) {
		Date date1 = this.getDateRecrutement();
		Date date2 = o.getDateRecrutement();

	       if (date1.after(date2)) {
	           return -1;
	       } else if (date1.before(date2)){
	           return 1;
	       } else {
	           return 0;
	       }
	}
	
}
