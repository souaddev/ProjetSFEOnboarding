import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import{Router}  from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs'; 
import {AuthentificationService} from '../../service/authentification.service';
import { Manager } from '../../module/manager';
import{RessourceHumaine}  from '../../module/ressource-humaine';
import{Employe}  from '../../module/employe';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  formData:FormGroup;
  errorLogin:boolean=false;
  submitted :boolean= false;
  public manager:Manager=new Manager();
  public ressourceHumaine:RessourceHumaine=new RessourceHumaine();
  public employe:Employe=new Employe();
  constructor(private loginService:AuthentificationService,private router:Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
        email    : new FormControl('',[Validators.required,Validators.email]),
        password    : new FormControl('',[Validators.required]),
        role    : new FormControl('Manager',Validators.required)
    });
}

get form() { return this.formData.controls; }


login(email:String,role:String){
  this.loginService.login(email,role).subscribe((user)=>{
    if (user!=null && user.motPasse==this.formData.value.password) {
      console.log("True");
      this.errorLogin=false;
      this.loginService.LoggedIn(user,this.formData.value.role);
      if(this.formData.value.role=="Manager"){
        this.router.navigate(['/manager/statistique']);
      }
      if(this.formData.value.role=="RessourceHumaine"){
        this.router.navigate(['/hr/statistique']);
      }
      if(this.formData.value.role=="Employe"){
        this.router.navigate(['/employe/statistique']);
      }
       
    }else{
      console.log("False");
      console.log(user);
      this.errorLogin=true;
    }
  },(error)=>{
    console.log(error);
  });
}
onSubmit(){ 
  this.submitted = true;
  if (this.formData.invalid) {
    return;
}
   this.login(this.formData.value.email,this.formData.value.role);
}
}
