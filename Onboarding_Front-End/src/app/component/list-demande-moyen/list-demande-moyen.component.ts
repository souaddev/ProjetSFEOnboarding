import {MoyenService} from '../../service/moyen.service';
import {Moyen} from '../../module/moyen'
import {EmployeService} from '../../service/employe.service';
import {Employe} from '../../module/employe'
import {DemandeMoyenService} from '../../service/demande-moyen.service';
import{Router}  from '@angular/router';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Component, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { AlertConfig } from 'ngx-bootstrap/alert';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Manager } from '../../module/manager';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { quantite: 'success' });
}

@Component({
  selector: 'app-list-demande-moyen',
  templateUrl: './list-demande-moyen.component.html',
  styleUrls: ['./list-demande-moyen.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListDemandeMoyenComponent implements OnInit {
  public moyens:Moyen[];
  // public moyensArray:Moyen[];
  public moyensArray: Array<Moyen> = [];
  public employes:Employe[];
  public manager=new Manager();
  formAdd:FormGroup;
  submitted :boolean= false;
  public created:boolean=false;
  constructor(private employeService:EmployeService,private moyenService:MoyenService,private demandeMoyenService:DemandeMoyenService) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      employe    : new FormControl(null,[Validators.required])
    },);
    this.manager=JSON.parse(localStorage.getItem('user'));
    this.listMoyen();
    this.listEmployeByManager(this.manager);
    
  }
  listMoyen(){
    this.moyenService.getMoyens().subscribe((moyens)=>{
      console.log(moyens);
      this.moyens=moyens;
    },(error)=>{
      console.log(error);
    })
  }
  listEmployeByManager(manager){
    this.employeService.getEmployesByManager(manager).subscribe((employes)=>{
      this.employes=employes;
      console.log(this.employes);
    },(error)=>{
      console.log(error);
    })
  }
  onChange(moyen:Moyen, isChecked: boolean) {
    if(isChecked) {
      this.moyensArray.push(moyen);
      console.log(this.moyensArray);
    } else {
      let index = this.moyensArray.indexOf(moyen);
      this.moyensArray.splice(index,1);
      console.log(this.moyensArray);
    }
}
createForm(){
  this.submitted = true;
  if (this.formAdd.invalid) {
    return;
}
for (let i=0;i<this.moyensArray.length;i++) {
  let demandeMoyen={id:null,manager:this.manager,employe:this.formAdd.value.employe,dateDemande:new Date(),valide:false,moyen:this.moyensArray[i]}
  console.log(demandeMoyen);
      this.demandeMoyenService.createDocument(demandeMoyen).subscribe((data)=>{
          this.ngOnInit();
          this.created=true;
  },(error)=>{
    console.log(error);
  });
 }

  console.log(this.formAdd.value.employe);
  console.log(this.moyensArray);
}
dismissible = true;
@ViewChild('addModal') public addModal: ModalDirective;
}
