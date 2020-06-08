import {PosteService} from '../../service/poste.service';
import {Poste} from '../../module/poste'
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
  selector: 'app-list-poste',
  templateUrl: './list-poste.component.html',
  styleUrls: ['./list-poste.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListPosteComponent implements OnInit {
  public postes:Poste[];
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  newPoste: Poste = new Poste();
  currentPoste: Poste = new Poste();
  constructor(private posteService:PosteService,private router:Router) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      nomPoste    : new FormControl('',[Validators.required]),
      type    : new FormControl('',[Validators.required]),
      description    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      nomPoste    : new FormControl('',[Validators.required]),
      type    : new FormControl('',[Validators.required]),
      description    : new FormControl('',[Validators.required])
  },);
  if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.listPoste();
  }
  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  listPoste(){
    this.posteService.getPostes().subscribe((postes)=>{
      console.log(postes);
      this.postes=postes;
    },(error)=>{
      console.log(error);
    })
  }
  deletePoste(poste){
    this.delete=false;
    this.posteService.deletePoste(poste).subscribe((data)=>{
        this.postes.splice(this.postes.indexOf(poste),1);
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
  onUpdate(poste:Poste){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.largeModal.show();
    this.updated=false;
    this.currentPoste=poste;
    this.formUpdate.setValue(this.currentPoste);
  }
  updateForm(){
    this.submitUpdate = true;
    if (this.formUpdate.invalid) {
      return;
    }
    this.newPoste= { id:this.formUpdate.value.id, nomPoste: this.formUpdate.value.nomPoste,type: this.formUpdate.value.type,description:this.formUpdate.value.description };
    this.posteService.updatePoste(this.newPoste).subscribe((data)=>{
        this.largeModal.hide();
        this.ngOnInit();
        this.updated=true;
    },(error)=>{
         console.log(error);
    });
  }

  createForm(){
    this.submitted = true;
    if (this.formAdd.invalid) {
      return;
  }
  this.newPoste= { id:this.formAdd.value.id, nomPoste: this.formAdd.value.nomPoste,type: this.formAdd.value.type,description:this.formAdd.value.description };
  console.log(this.newPoste);
  this.posteService.createPoste(this.newPoste).subscribe((data)=>{
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
