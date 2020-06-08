import {ParticipationService} from '../../service/participation.service';
import {EvenementService} from '../../service/evenement.service';
import {EmployeService} from '../../service/employe.service';
import {Participation} from '../../module/participation'
import {Employe} from '../../module/employe'
import {Evenement} from '../../module/evenement'
import{Router}  from '@angular/router';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Component, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { AlertConfig } from 'ngx-bootstrap/alert';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Manager } from '../../module/manager';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-list-participation',
  templateUrl: './list-participation.component.html',
  styleUrls: ['./list-participation.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListParticipationComponent implements OnInit {

  public participations:Participation[];
  public evenements:Evenement[];
  public employes:Employe[];
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  public manager=new Manager();
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  errorDateP:any={isError:false,errorMessage:''};
  newParticipation: Participation = new Participation();
  currentParticipation: Participation = new Participation();
  constructor(private employeService:EmployeService,private participationService:ParticipationService,private evenementService:EvenementService,private router:Router) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      employe    : new FormControl('',[Validators.required]),
      evenement    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      employe    : new FormControl(null,[Validators.required]),
      evenement    : new FormControl(null,[Validators.required]),
      dateParticipation    : new FormControl(null,[Validators.required])
  },);
  if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.manager=JSON.parse(localStorage.getItem('user'));
    this.listParticipationByManager(this.manager);
    this.listEvenement();
    this.listEmployeByManager(this.manager);
  }
  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  listParticipationByManager(manager){
    this.participationService.getParticipationsByManager(manager).subscribe((participations)=>{
      console.log(participations);
      this.participations=participations;
    },(error)=>{
      console.log(error);
    })
  }
  listEmployeByManager(manager){
    this.employeService.getEmployesByManager(manager).subscribe((employes)=>{
      console.log(employes);
      this.employes=employes;
    },(error)=>{
      console.log(error);
    })
  }
  listEvenement(){
    this.evenementService.getEvenements().subscribe((evenements)=>{
      console.log(evenements);
      this.evenements=evenements;
    },(error)=>{
      console.log(error);
    })
  }
  deleteParticipation(participation){
    this.delete=false;
    this.participationService.deleteParticipation(participation).subscribe((data)=>{
        this.participations.splice(this.participations.indexOf(participation),1);
        this.delete=true;
    },(error)=>{
      console.log(error);
      this.delete=false;
    });
  }
  onAdd(){
    this.formAdd.reset();
    this.submitted = false;
    this.addModal.show();
    this.created=false;
  }
  onUpdate(participation:Participation){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.largeModal.show();
    this.updated=false;
    this.errorDateP.isError=false;
    this.currentParticipation=participation;
    this.formUpdate.setValue(this.currentParticipation);
    this.formUp.evenement.setValue(this.currentParticipation.evenement.id);
    this.formUp.employe.setValue(this.currentParticipation.employe.id);
  }
  updateForm(){
    this.errorDateP.isError=false;
    this.compareDateParticipation(this.formUpdate.value.dateParticipation);
    this.submitUpdate = true;
    if (this.formUpdate.invalid ||  this.errorDateP.isError) {
      return;
    }
    let selectEvenement=this.evenements.find(value => value.id === parseInt(this.formUpdate.value.evenement));
    let selectEmploye=this.employes.find(value => value.id === parseInt(this.formUpdate.value.employe));
    this.newParticipation= { id:this.formUpdate.value.id, employe: selectEmploye,evenement:selectEvenement,dateParticipation:this.formUpdate.value.dateParticipation };
            this.participationService.updateParticipation(this.newParticipation).subscribe((data)=>{
            this.largeModal.hide();
            this.ngOnInit();
            this.updated=true;
       },(error)=>{
         console.log(error);
       });
  }

  createForm(){
    this.submitted = true;
    console.log(this.formAdd.value.evenement);
    if (this.formAdd.invalid) {
      return;
  }
      let newParticipation= {employe: this.formAdd.value.employe,evenement:this.formAdd.value.evenement,dateParticipation:new Date() };
      console.log(newParticipation);
      this.participationService.createParticipation(newParticipation).subscribe((data)=>{
            this.addModal.hide();
            this.ngOnInit();
             this.created=true;
    },(error)=>{
      console.log(error);
    });
}
compareDateParticipation(date){
  if(new Date(date)>new Date()){
     this.errorDateP={isError:true,errorMessage:'La date de participation est invalide'};
     console.log(this.errorDateP.isError);
    }
}
dismissible = true;

   @ViewChild('smallModal') public smallModal: ModalDirective;
   @ViewChild('largeModal') public largeModal: ModalDirective;
   @ViewChild('addModal') public addModal: ModalDirective;

}
