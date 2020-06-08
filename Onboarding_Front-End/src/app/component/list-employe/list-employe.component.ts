import {EmployeService} from '../../service/employe.service';
import {EquipeService} from '../../service/equipe.service';
import {PosteService} from '../../service/poste.service';
import {Employe} from '../../module/employe'
import {Poste} from '../../module/poste'
import {Equipe} from '../../module/equipe'
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
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListEmployeComponent implements OnInit {
  public users:Employe[];
  public equipes:Equipe[];
  public postes:Poste[];
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  public errorEmail:boolean=false;
  public currentEquipe:Equipe=new Equipe();
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  newUser: Employe = new Employe();
  currentUser: Employe = new Employe();
  errorDateN:any={isError:false,errorMessage:''};
  errorDateR:any={isError:false,errorMessage:''};
  constructor(private userService:EmployeService,private equipeService:EquipeService,private posteService:PosteService,private router:Router) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      nom    : new FormControl('',[Validators.required]),
      prenom    : new FormControl('',[Validators.required]),
      email    : new FormControl('',[Validators.required,Validators.email]),
      motPasse    : new FormControl('',[Validators.required]),
      sexe    : new FormControl('',[Validators.required]),
      cin    : new FormControl('',[Validators.required]),
      adresse    : new FormControl('',[Validators.required]),
      dateRecrutement    : new FormControl('',[Validators.required]),
      dateNaissance    : new FormControl('',[Validators.required]),
      tel    : new FormControl('',[Validators.required]),
      equipe    : new FormControl('',[Validators.required]),
      poste    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      nom    : new FormControl(null,[Validators.required]),
      prenom    : new FormControl(null,[Validators.required]),
      email    : new FormControl(null,[Validators.required,Validators.email]),
      motPasse    : new FormControl(null,[Validators.required]),
      sexe    : new FormControl('',[Validators.required]),
      cin    : new FormControl('',[Validators.required]),
      adresse    : new FormControl('',[Validators.required]),
      dateRecrutement    : new FormControl('',[Validators.required]),
      dateNaissance    : new FormControl('',[Validators.required]),
      tel    : new FormControl('',[Validators.required]),
      equipe    : new FormControl(null,[Validators.required]),
      poste    : new FormControl(null,[Validators.required])
  },);
  
    this.listEmploye();
    this.listEquipe();
    this.listPoste();
  }

  listEmploye(){
    this.userService.getEmployes().subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    })
  }
  listEquipe(){
    this.equipeService.getEquipes().subscribe((equipes)=>{
      console.log(equipes);
      this.equipes=equipes;
    },(error)=>{
      console.log(error);
    })
  }
  listPoste(){
    this.posteService.getPostes().subscribe((postes)=>{
      console.log(postes);
      this.postes=postes;
    },(error)=>{
      console.log(error);
    })
  }
  createForm(){
    this.submitted = true;
    this.errorDateN.isError=false;this.errorDateR.isError=false;
    this.compareDateNaissance(this.formAdd.value.dateNaissance);
    this.compareDateRecretument(this.formAdd.value.dateRecrutement);
    if (this.formAdd.invalid || this.errorDateN.isError || this.errorDateR.isError) {
      return;
  }
      this.newUser= { id:null, nom: this.formAdd.value.nom,prenom:this.formAdd.value.prenom,email:this.formAdd.value.email,motPasse:this.formAdd.value.motPasse,cin: this.formAdd.value.cin,sexe:this.formAdd.value.sexe,adresse:this.formAdd.value.adresse,tel:this.formAdd.value.tel,equipe:this.formAdd.value.equipe,poste:this.formAdd.value.poste,dateNaissance:this.formAdd.value.dateNaissance,dateRecrutement: this.formAdd.value.dateRecrutement};
      console.log(this.newUser);
      this.userService.checkEmailEmploye(this.newUser).subscribe((user)=>{
        if(user.email==this.newUser.email){
            this.errorEmail=true;
        }else{
          this.userService.createEmploye(this.newUser).subscribe((data)=>{
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

updateForm(){
  this.submitUpdate = true;
  this.errorDateN.isError=false;this.errorDateR.isError=false;
  this.compareDateNaissance(this.formUpdate.value.dateNaissance);
  this.compareDateRecretument(this.formUpdate.value.dateRecrutement);
  if (this.formUpdate.invalid || this.errorDateN.isError || this.errorDateR.isError) {
    return;
  }else{
    let selectEquipe=this.equipes.find(value => value.id === parseInt(this.formUpdate.value.equipe));
    let selectPoste=this.postes.find(value => value.id === parseInt(this.formUpdate.value.poste));
    this.newUser= { id:this.formUpdate.value.id, nom: this.formUpdate.value.nom,prenom:this.formUpdate.value.prenom,email:this.formUpdate.value.email,motPasse:this.formUpdate.value.motPasse,cin: this.formUpdate.value.cin,sexe:this.formUpdate.value.sexe,adresse:this.formUpdate.value.adresse,tel:this.formUpdate.value.tel,equipe:selectEquipe,poste:selectPoste,dateNaissance:this.formUpdate.value.dateNaissance,dateRecrutement: this.formUpdate.value.dateRecrutement};
     this.userService.checkEmailEmploye(this.newUser).subscribe((user)=>{
      if(user.email==this.newUser.email && user.email!=this.currentUser.email){
        this.errorEmail=true;
      }else{
        this.userService.updateEmploye(this.newUser).subscribe((data)=>{
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
}
deleteEmploye(user){
    this.delete=false;
    this.userService.deleteEmploye(user).subscribe((data)=>{
        this.users.splice(this.users.indexOf(user),1);
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
    this.errorEmail=false;
    this.created=false;
    this.errorDateN.isError=false;
    this.errorDateR.isError=false;
  }
  onUpdate(user:Employe){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.errorEmail=false;
    this.largeModal.show();
    this.updated=false;
    this.currentUser=user;
    this.formUpdate.setValue(this.currentUser);
    this.formUp.poste.setValue(this.currentUser.poste.id);
    this.formUp.equipe.setValue(this.currentUser.equipe.id);
    this.errorDateN.isError=false;
    this.errorDateR.isError=false;
  }
  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  dismissible = true;

compareDateNaissance(date){
    if(new Date(date)>=new Date()){
       this.errorDateN={isError:true,errorMessage:'La date de naissance est invalide'};
       console.log(this.errorDateN.isError);
      }
 }
 compareDateRecretument(date){
  if(new Date(date)>new Date()){
     this.errorDateR={isError:true,errorMessage:'La date de recrutement est invalide'};
     console.log(this.errorDateR.isError);
    }
}
   @ViewChild('smallModal') public smallModal: ModalDirective;
   @ViewChild('largeModal') public largeModal: ModalDirective;
   @ViewChild('addModal') public addModal: ModalDirective;
}
