import {EquipeService} from '../../service/equipe.service';
import {ManagerService} from '../../service/manager.service';
import {Equipe} from '../../module/equipe'
import {Manager} from '../../module/manager'
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
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListEquipeComponent implements OnInit {
  public equipes:Equipe[];
  public managers:Manager[];
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  public errorManager:boolean=false;
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  newEquipe: Equipe = new Equipe();
  currentEquipe: Equipe = new Equipe();
  constructor(private equipeService:EquipeService,private managerService:ManagerService,private router:Router) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      service    : new FormControl('',[Validators.required]),
      manager    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      service    : new FormControl(null,[Validators.required]),
      manager    : new FormControl(null,[Validators.required])
  },);
  if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.listEquipe();
    this.listManager();
  }
  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  listEquipe(){
    this.equipeService.getEquipes().subscribe((equipes)=>{
      console.log(equipes);
      this.equipes=equipes;
    },(error)=>{
      console.log(error);
    })
  }

  listManager(){
    this.managerService.getManagers().subscribe((managers)=>{
      console.log(managers);
      this.managers=managers;
    },(error)=>{
      console.log(error);
    })
  }
  deleteEquipe(equipe){
    this.delete=false;
    this.equipeService.deleteEquipe(equipe).subscribe((data)=>{
        this.equipes.splice(this.equipes.indexOf(equipe),1);
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
    this.errorManager=false;
    this.created=false;
  }
  onUpdate(equipe:Equipe){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.errorManager=false;
    this.largeModal.show();
    this.updated=false;
    this.currentEquipe=equipe;
    this.formUpdate.setValue(this.currentEquipe);
    this.formUp.manager.setValue(this.currentEquipe.manager.id);
  }
  updateForm(){
    this.submitUpdate = true;
    if (this.formUpdate.invalid) {
      return;
    }
    let selectManager=this.managers.find(value => value.id === parseInt(this.formUpdate.value.manager));
    this.newEquipe= { id:this.formUpdate.value.id, service: this.formUpdate.value.service,manager:selectManager };
       this.equipeService.checkManager(this.newEquipe).subscribe((equipe)=>{
        if(equipe.manager==this.newEquipe.manager && equipe.manager!=this.currentEquipe.manager){
          this.errorManager=true;
        }else{
          this.equipeService.updateEquipe(this.newEquipe).subscribe((data)=>{
            this.largeModal.hide();
            this.ngOnInit();
            this.updated=true;
          },(error1)=>{
            console.log(error1);
          });
        }
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
      let newEquipe= {service: this.formAdd.value.service,manager:this.formAdd.value.manager };
      console.log(newEquipe);
      this.equipeService.checkManager(newEquipe).subscribe((equipe)=>{
        if( equipe.id!=0){
          console.log(equipe);
            this.errorManager=true;
        }else{
          this.equipeService.createEquipe(newEquipe).subscribe((data)=>{
            this.addModal.hide();
            this.ngOnInit();
             this.created=true;
          },(error1)=>{
            console.log(error1);
          });
          }
    },(error)=>{
      console.log(error);
    });
}
dismissible = true;

   @ViewChild('smallModal') public smallModal: ModalDirective;
   @ViewChild('largeModal') public largeModal: ModalDirective;
   @ViewChild('addModal') public addModal: ModalDirective;
}
