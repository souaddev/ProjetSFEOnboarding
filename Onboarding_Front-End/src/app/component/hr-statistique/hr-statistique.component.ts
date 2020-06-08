import { Component, OnInit } from '@angular/core';
import {StatistiqueService} from '../../service/statistique.service';


@Component({
  selector: 'app-hr-statistique',
  templateUrl: './hr-statistique.component.html',
  styleUrls: ['./hr-statistique.component.css']
})
export class HrStatistiqueComponent implements OnInit {
  documentNonRendu:number=0;
  documentRendu:number=0;
  employes:number=0;
  postes:number=0;
  equipes:number=0;
  managers:number=0;
  constructor(private statistiqueService:StatistiqueService) { }

  ngOnInit(): void {
    this.getDocumentNonRendu();
    this.getDocumentRendu();
    this.getEmployes();
    this.getManagers();
    this.getEquipes();
    this.getPostes();
  }
  getDocumentNonRendu(){
    this.statistiqueService.getStatistiqueDocumentNonRendu().subscribe((documentNonRendu)=>{
      this.documentNonRendu=documentNonRendu;
    },(error)=>{
      console.log(error);
    })
  }
  getDocumentRendu(){
    this.statistiqueService.getStatistiqueDocumentRendu().subscribe((documentRendu)=>{
      this.documentRendu=documentRendu;
    },(error)=>{
      console.log(error);
    })
  }

  getEmployes(){
    this.statistiqueService.getStatistiqueEmployeHR().subscribe((employes)=>{
      this.employes=employes;
    },(error)=>{
      console.log(error);
    })
  }

  getManagers(){
    this.statistiqueService.getStatistiqueManager().subscribe((managers)=>{
      this.managers=managers;
    },(error)=>{
      console.log(error);
    })
  }

  getPostes(){
    this.statistiqueService.getStatistiquePoste().subscribe((postes)=>{
      this.postes=postes;
    },(error)=>{
      console.log(error);
    })
  }

  getEquipes(){
    this.statistiqueService.getStatistiqueEquipe().subscribe((equipes)=>{
      this.equipes=equipes;
    },(error)=>{
      console.log(error);
    })
  }
}
