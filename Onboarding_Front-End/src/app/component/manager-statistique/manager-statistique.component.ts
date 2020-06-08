import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../service/statistique.service';
import { Manager } from '../../module/manager';

@Component({
  selector: 'app-manager-statistique',
  templateUrl: './manager-statistique.component.html',
  styleUrls: ['./manager-statistique.component.css']
})
export class ManagerStatistiqueComponent implements OnInit {

  moyens:number=0;
  demandeMoyens:number=0;
  employes:number=0;
  evenements:number=0;
  participations:number=0;
  manager:Manager=new Manager();
  constructor(private statistiqueService:StatistiqueService) { }

  ngOnInit(): void {
    this.manager=JSON.parse(localStorage.getItem('user'));
    this.getMoyens();
    this.getDemandeMoyens(this.manager);
    this.getEmployes(this.manager);
    this.getEvenements(this.manager);
    this.getParticipations(this.manager);
  }
  getMoyens(){
    this.statistiqueService.getStatistiqueMoyen().subscribe((moyens)=>{
      this.moyens=moyens;
    },(error)=>{
      console.log(error);
    })
  }
  getDemandeMoyens(manager){
    this.statistiqueService.getStatistiqueDemandeMoyen(manager).subscribe((demandeMoyens)=>{
      this.demandeMoyens=demandeMoyens;
    },(error)=>{
      console.log(error);
    })
  }

  getEmployes(manager){
    this.statistiqueService.getStatistiqueEmploye(manager).subscribe((employes)=>{
      this.employes=employes;
    },(error)=>{
      console.log(error);
    })
  }

  getEvenements(manager){
    this.statistiqueService.getStatistiqueEvenementManager(manager).subscribe((evenements)=>{
      this.evenements=evenements;
    },(error)=>{
      console.log(error);
    })
  }

  getParticipations(manager){
    this.statistiqueService.getStatistiqueParticipationManager(manager).subscribe((participations)=>{
      this.participations=participations;
    },(error)=>{
      console.log(error);
    })
  }

}
