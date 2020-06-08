import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Employe}  from '../module/employe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../module/manager';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private user = new Employe();

  public id:number=null;
  public role:String=null;
  constructor(private _http:Http,private http:HttpClient) {
    this.id =JSON.parse(localStorage.getItem('id'));
    this.role =JSON.parse(localStorage.getItem('role'));
   }

   getEmployes(){
    return this._http.get(this.baseUrl+'/EmployeList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getEmployesByManager(manager:Manager){
    return this._http.post(this.baseUrl+'/EmployeListByManager',JSON.stringify(manager),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getEmployesByEmploye(employe:Employe){
    return this._http.post(this.baseUrl+'/EmployeListInEquipe',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getNewEmployeNotification(employe:Employe){
    return this._http.post(this.baseUrl+'/NouveauEmployeNotification',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteEmploye(user:Employe){
    return this._http.delete(this.baseUrl+'/Employe/'+user.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  checkEmailEmploye(user:Employe){

    return this._http.post(this.baseUrl+'/checkEmailEmploye',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createEmploye(user:Employe){

    return this._http.post(this.baseUrl+'/Employe',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateEmploye(user:Employe){

    return this._http.put(this.baseUrl+'/Employe',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(user:Employe){
    this.user=user;
  }
  getter(){
    return this.user;
  }

}
