import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../service/statistique.service';
import { Employe } from '../../module/employe';

@Component({
  selector: 'app-employe-statistique',
  templateUrl: './employe-statistique.component.html',
  styleUrls: ['./employe-statistique.component.css']
})
export class EmployeStatistiqueComponent implements OnInit {

  participations:number=0;
  jours:number=0;
  equipes:number=0;
  documents:number=0;
  employe:Employe=new Employe();
  constructor(private statistiqueService:StatistiqueService) { }

  ngOnInit(): void {
    this.employe=JSON.parse(localStorage.getItem('user'));
    this.getDocumentsNonRendu(this.employe);
    // this.getJours(this.employe);
    this.getMembreEquipe(this.employe);
    this.getParticipations(this.employe);
  }
  getDocumentsNonRendu(employe){
    this.statistiqueService.getStatistiqueDocumentNonRenduEmploye(employe).subscribe((documents)=>{
      this.documents=documents;
    },(error)=>{
      console.log(error);
    })
  }
  getJours(employe){
    this.statistiqueService.getNombreJour(manager).subscribe((jours)=>{
      this.jours=jours;
    },(error)=>{
      console.log(error);
    })
  }

  getMembreEquipe(employe){
    this.statistiqueService.getStatistiqueMembreEquipe(employe).subscribe((equipes)=>{
      this.equipes=equipes;
    },(error)=>{
      console.log(error);
    })
  }

  getParticipations(employe){
    this.statistiqueService.getStatistiqueEvenement(employe).subscribe((participations)=>{
      this.participations=participations;
    },(error)=>{
      console.log(error);
    })
  }

}
