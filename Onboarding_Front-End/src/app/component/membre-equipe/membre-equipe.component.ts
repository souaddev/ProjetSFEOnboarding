import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../service/employe.service';
import {Employe} from '../../module/employe'
import{Router}  from '@angular/router';

@Component({
  selector: 'app-membre-equipe',
  templateUrl: './membre-equipe.component.html',
  styleUrls: ['./membre-equipe.component.css']
})
export class MembreEquipeComponent implements OnInit {

  public employes:Employe[];
  public NEWemploye:Employe=new Employe();
  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.NEWemploye=JSON.parse(localStorage.getItem('user'));
    this.getEmployesEquipe(this.NEWemploye);
  }
  getEmployesEquipe(employe){
    this.employeService.getEmployesByEmploye(employe).subscribe((employes)=>{
      console.log(employes);
      this.employes=employes;
    },(error)=>{
      console.log(error);
    })
  }

}
