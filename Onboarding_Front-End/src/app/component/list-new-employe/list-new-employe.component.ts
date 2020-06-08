import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../service/employe.service';
import {Employe} from '../../module/employe'
import{Router}  from '@angular/router';

@Component({
  selector: 'app-list-new-employe',
  templateUrl: './list-new-employe.component.html',
  styleUrls: ['./list-new-employe.component.css']
})
export class ListNewEmployeComponent implements OnInit {

  public employes:Employe[];
  public NEWemploye:Employe=new Employe();
  Math: any;
  public colors=["primary","success","danger","warning","info","dark"];
  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.NEWemploye=JSON.parse(localStorage.getItem('user'));
    this.getNewEmployeNotification(this.NEWemploye);
    this.Math = Math;
  }
  getNewEmployeNotification(employe){
    this.employeService.getNewEmployeNotification(employe).subscribe((employes)=>{
      console.log(employes);
      this.employes=employes;
    },(error)=>{
      console.log(error);
    })
  }

}
