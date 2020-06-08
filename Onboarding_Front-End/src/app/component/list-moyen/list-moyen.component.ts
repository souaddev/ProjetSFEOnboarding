import {MoyenService} from '../../service/moyen.service';
import {Moyen} from '../../module/moyen'
import{Router}  from '@angular/router';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Component, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { AlertConfig } from 'ngx-bootstrap/alert';
import {FormControl,FormGroup,Validators} from '@angular/forms';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { quantite: 'success' });
}

@Component({
  selector: 'app-list-moyen',
  templateUrl: './list-moyen.component.html',
  styleUrls: ['./list-moyen.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListMoyenComponent implements OnInit {

  public moyens:Moyen[];
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  newMoyen: Moyen = new Moyen();
  currentMoyen: Moyen = new Moyen();
  constructor(private moyenService:MoyenService,private router:Router) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      label    : new FormControl('',[Validators.required]),
      quantite    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      label    : new FormControl('',[Validators.required]),
      quantite    : new FormControl('',[Validators.required])
  },);
  if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.listMoyen();
  }
  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  listMoyen(){
    this.moyenService.getMoyens().subscribe((moyens)=>{
      console.log(moyens);
      this.moyens=moyens;
    },(error)=>{
      console.log(error);
    })
  }
  deleteMoyen(moyen){
    this.delete=false;
    this.moyenService.deleteMoyen(moyen).subscribe((data)=>{
        this.moyens.splice(this.moyens.indexOf(moyen),1);
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
  onUpdate(moyen:Moyen){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.largeModal.show();
    this.updated=false;
    this.currentMoyen=moyen;
    this.formUpdate.setValue(this.currentMoyen);
  }
  updateForm(){
    this.submitUpdate = true;
    if (this.formUpdate.invalid) {
      return;
    }
    this.newMoyen= { id:this.formUpdate.value.id, label: this.formUpdate.value.label,quantite: this.formUpdate.value.quantite };
    this.moyenService.updateMoyen(this.newMoyen).subscribe((data)=>{
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
  this.newMoyen= { id:this.formAdd.value.id, label: this.formAdd.value.label,quantite: this.formAdd.value.quantite};
  console.log(this.newMoyen);
  this.moyenService.createMoyen(this.newMoyen).subscribe((data)=>{
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
