import {EvenementService} from '../../service/evenement.service';
import {ManagerService} from '../../service/manager.service';
import {Evenement} from '../../module/evenement'
import {Manager} from '../../module/manager'
import * as moment from 'moment'
import{Router}  from '@angular/router';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Component, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { AlertConfig } from 'ngx-bootstrap/alert';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}
@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListEvenementComponent implements OnInit {

  public evenements:Evenement[];
  public manager=new Manager();
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  newEvenement: Evenement = new Evenement();
  currentEvenement: Evenement = new Evenement();
  constructor(private evenementService:EvenementService,private managerService:ManagerService,private router:Router) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      nom    : new FormControl('',[Validators.required]),
      type    : new FormControl('',[Validators.required]),
      description    : new FormControl('',[Validators.required]),
      lieu    : new FormControl('',[Validators.required]),
      dateDebut    : new FormControl('',[Validators.required]),
      dateFin    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      nom    : new FormControl('',[Validators.required]),
      type    : new FormControl('',[Validators.required]),
      description    : new FormControl('',[Validators.required]),
      lieu    : new FormControl('',[Validators.required]),
      dateDebut    : new FormControl('',[Validators.required]),
      dateFin    : new FormControl('',[Validators.required])
  },);
  if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.manager=JSON.parse(localStorage.getItem('user'));
    this.listEvenement();
  }
  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  listEvenement(){
    this.evenementService.getEvenementsByManager(this.manager).subscribe((evenements)=>{
      console.log(evenements);
      this.evenements=evenements;
    },(error)=>{
      console.log(error);
    })
  }

  deleteEvenement(evenement){
    this.delete=false;
    this.evenementService.deleteEvenement(evenement).subscribe((data)=>{
        this.evenements.splice(this.evenements.indexOf(evenement),1);
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
  onUpdate(evenement:Evenement){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.largeModal.show();
    this.updated=false;
    this.currentEvenement=evenement;
    this.formUpdate.setValue(this.currentEvenement);
    let dateD=new Date(this.currentEvenement.dateDebut);
    let dateF=new Date(this.currentEvenement.dateFin);
    var isoDateD = new Date(dateD.getTime() - (dateD.getTimezoneOffset() * 60000)).toISOString();
    var isoDateF = new Date(dateF.getTime() - (dateF.getTimezoneOffset() * 60000)).toISOString();
    console.log(isoDateD);
    this.formUp.dateDebut.setValue(isoDateD.substring(0, 16));
    this.formUp.dateFin.setValue(isoDateF.substring(0, 16));
    // this.formUp.dateFin.setValue(dateF.toISOString().substring(0, 16));
  }
  updateForm(){
    this.submitUpdate = true;
    if (this.formUpdate.invalid) {
      return;
    }
    this.newEvenement= { id:this.formUpdate.value.id, nom: this.formUpdate.value.nom,type: this.formUpdate.value.type,description: this.formUpdate.value.description,lieu: this.formUpdate.value.lieu,dateDebut: this.formUpdate.value.dateDebut,dateFin: this.formUpdate.value.dateFin,manager:this.manager };
    this.evenementService.updateEvenement(this.newEvenement).subscribe((data)=>{
        this.largeModal.hide();
        this.ngOnInit();
        this.updated=true;
    },(error)=>{
       console.log(error);
    });
  }

  createForm(){
    this.submitted = true;
    console.log(this.formAdd.value.manager);
    if (this.formAdd.invalid) {
      return;
  }
     let newEvenement= {nom: this.formAdd.value.nom,type: this.formAdd.value.type,description: this.formAdd.value.description,lieu: this.formAdd.value.lieu,dateDebut: this.formAdd.value.dateDebut,dateFin: this.formAdd.value.dateFin,manager:this.manager };
      console.log(newEvenement);
      this.evenementService.createEvenement(newEvenement).subscribe((data)=>{
          this.addModal.hide();
          this.ngOnInit();
          this.created=true;
    },(error)=>{
      console.log(error);
    });
}
dismissible = true;

   @ViewChild('smallModal') public smallModal: ModalDirective;
   @ViewChild('largeModal') public largeModal: ModalDirective;
   @ViewChild('addModal') public addModal: ModalDirective;

}
