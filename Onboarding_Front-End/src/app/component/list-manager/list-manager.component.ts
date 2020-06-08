import {ManagerService} from '../../service/manager.service';
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
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css'],
  encapsulation: ViewEncapsulation.None,

  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})

export class ListManagerComponent {
  public users:Manager[];
  public delete:boolean=false;
  public created:boolean=false;
  public updated:boolean=false;
  public errorEmail:boolean=false;
  formAdd:FormGroup;
  formUpdate:FormGroup;
  submitted :boolean= false;
  submitUpdate :boolean= false;
  newUser: Manager = new Manager();
  currentUser: Manager = new Manager();
  constructor(private userService:ManagerService,private router:Router) {}

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      nom    : new FormControl('',[Validators.required]),
      prenom    : new FormControl('',[Validators.required]),
      email    : new FormControl('',[Validators.required,Validators.email]),
      motPasse    : new FormControl('',[Validators.required])
  },);
    this.formUpdate = new FormGroup({
      id    : new FormControl(null),
      nom    : new FormControl(null,[Validators.required]),
      prenom    : new FormControl(null,[Validators.required]),
      email    : new FormControl(null,[Validators.required,Validators.email]),
      motPasse    : new FormControl(null,[Validators.required])
  },);
    console.log(JSON.parse(localStorage.getItem('user')));
    if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.listClient();
  }

  get form() { return this.formAdd.controls; }
  get formUp() { return this.formUpdate.controls; }

  listClient(){
    this.userService.getManagers().subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    })
  }

  deleteManager(user){
    this.delete=false;
    this.userService.deleteManager(user).subscribe((data)=>{
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
  }
  onUpdate(user:Manager){
    this.formUpdate.reset();
    this.submitUpdate = false;
    this.errorEmail=false;
    this.largeModal.show();
    this.updated=false;
    this.currentUser=user;
    this.formUp.id.setValue(this.currentUser.id);
    this.formUp["email"].setValue(this.currentUser.email);
    this.formUp.prenom.setValue(this.currentUser.prenom);
    this.formUp.nom.setValue(this.currentUser.nom);
    this.formUp.motPasse.setValue(this.currentUser.motPasse);
  }
  updateForm(){
    this.submitUpdate = true;
    if (this.formUpdate.invalid) {
      return;
    }
    this.newUser= { id:this.formUpdate.value.id, nom: this.formUpdate.value.nom,prenom:this.formUpdate.value.prenom,email:this.formUpdate.value.email,motPasse:this.formUpdate.value.motPasse };
       this.userService.checkEmail(this.newUser).subscribe((user)=>{
        if(user.email==this.newUser.email && user.email!=this.currentUser.email){
          this.errorEmail=true;
        }else{
          this.userService.updateManager(this.newUser).subscribe((data)=>{
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
    if (this.formAdd.invalid) {
      return;
  }
      this.newUser= { id:null, nom: this.formAdd.value.nom,prenom:this.formAdd.value.prenom,email:this.formAdd.value.email,motPasse:this.formAdd.value.motPasse };
      this.userService.checkEmail(this.newUser).subscribe((user)=>{
        if(user.email==this.newUser.email){
            this.errorEmail=true;
        }else{
          this.userService.createManager(this.newUser).subscribe((data)=>{
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

