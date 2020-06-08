import {DocumentService} from '../../service/document.service';
import {EmployeService} from '../../service/employe.service';
import {Document} from '../../module/document'
import {Employe} from '../../module/employe'
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
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ListDocumentComponent implements OnInit {

  public documents:Document[];
  public employes:Employe[];
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  newDocument: Document = new Document();
  currentDocument: Document = new Document();
  errorDateR:any={isError:false,errorMessage:''};
  constructor(private documentService:DocumentService,private employeService:EmployeService,private router:Router) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      label    : new FormControl('',[Validators.required]),
      employe    : new FormControl('',[Validators.required]),
      dateRendu    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      label    : new FormControl('',[Validators.required]),
      employe    : new FormControl('',[Validators.required]),
      dateRendu    : new FormControl('',[Validators.required]),
      isValide    : new FormControl('',[Validators.required])
  },);
  if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.listDocument();
    this.listEmploye();
  }
  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  listDocument(){
    this.documentService.getDocuments().subscribe((documents)=>{
      console.log(documents);
      this.documents=documents;
    },(error)=>{
      console.log(error);
    })
  }
  notify(document:Document){
    this.documentService.notifyEmploye(document).subscribe((document)=>{
      console.log(document);
      this.ngOnInit();
    },(error)=>{
      console.log(error);
    })
  }

  listEmploye(){
    this.employeService.getEmployes().subscribe((employes)=>{
      console.log(employes);
      this.employes=employes;
    },(error)=>{
      console.log(error);
    })
  }
  deleteDocument(document){
    this.delete=false;
    this.documentService.deleteDocument(document).subscribe((data)=>{
        this.documents.splice(this.documents.indexOf(document),1);
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
    this.errorDateR.isError=false;
  }
  onUpdate(document:Document){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.largeModal.show();
    this.updated=false;
    this.currentDocument=document;
    this.formUp.label.setValue(this.currentDocument.label);
    this.formUp.dateRendu.setValue(this.currentDocument.dateRendu);
    this.formUp.isValide.setValue(this.currentDocument.isValide);
    this.formUp.employe.setValue(this.currentDocument.employe.id);
    this.errorDateR.isError=false;
  }
  updateForm(){
    this.submitUpdate = true;this.errorDateR.isError=false;
    this.compareDateRendu(this.formUpdate.value.dateRendu);
    if (this.formUpdate.invalid || this.errorDateR.isError) {
      return;
    }
    let selectEmploye=this.employes.find(value => value.id === parseInt(this.formUpdate.value.employe));
    this.newDocument= { id:this.currentDocument.id, label: this.formUpdate.value.label,employe:selectEmploye,dateRendu:this.formUpdate.value.dateRendu,notifier:this.currentDocument.notifier,isValide:this.formUpdate.value.isValide };
    this.documentService.updateDocument(this.newDocument).subscribe((data)=>{
            this.largeModal.hide();
            this.ngOnInit();
            this.updated=true;
       },(error)=>{
         console.log(error);
       });
  }

  createForm(){
    this.submitted = true;this.errorDateR.isError=false;
    console.log(this.formAdd.value.employe);
    this.compareDateRendu(this.formAdd.value.dateRendu);
    if (this.formAdd.invalid || this.errorDateR.isError) {
      return;
  } 
  let newDocument= { label: this.formAdd.value.label,employe:this.formAdd.value.employe,dateRendu:this.formAdd.value.dateRendu,notifier:false,isValide:false };   console.log(newDocument);
  this.documentService.createDocument(newDocument).subscribe((data)=>{
            this.addModal.hide();
            this.ngOnInit();
            this.created=true;
    },(error)=>{
      console.log(error);
    });
}
dismissible = true;
compareDateRendu(date){
  if(new Date(date)<new Date()){
     this.errorDateR={isError:true,errorMessage:'La date de rendu est invalide'};
     console.log(this.errorDateR.isError);
    }
}
   @ViewChild('smallModal') public smallModal: ModalDirective;
   @ViewChild('largeModal') public largeModal: ModalDirective;
   @ViewChild('addModal') public addModal: ModalDirective;

}
