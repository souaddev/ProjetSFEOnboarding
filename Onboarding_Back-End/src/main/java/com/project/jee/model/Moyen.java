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
@Table(name="Moyen")
public class Moyen implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotNull
	private String label;
	private int quantite;
	@JsonIgnore
	@OneToMany(mappedBy = "moyen")
	private Collection<DemandeMoyen> demandeMoyens;
	
	public Moyen() {
		super();
	}
	public Moyen(int id, String label,int quantite) {
		super();
		this.id = id;
		this.label = label;
		this.quantite=quantite;
		
	}
	public Moyen(String label,int quantite) {
		super();
		this.label = label;
		this.quantite=quantite;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public Collection<DemandeMoyen> getDemandeMoyens() {
		return demandeMoyens;
	}
	public void setDemandeMoyens(Collection<DemandeMoyen> demandeMoyens) {
		this.demandeMoyens = demandeMoyens;
	}
	@Override
	public String toString() {
		return "Moyen [id=" + id + ", label=" + label +"]";
	}
	
}
