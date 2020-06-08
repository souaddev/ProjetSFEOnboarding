import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Manager}  from '../module/manager';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private user = new Manager();

  public id:number=null;
  public role:String=null;

  constructor(private _http:Http,private http:HttpClient) { 
    this.id =JSON.parse(localStorage.getItem('id'));
    this.role =JSON.parse(localStorage.getItem('role'));
  }

  getManagers(){
    return this._http.get(this.baseUrl+'/managerList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  RegisterClient(user:Manager){
    return this._http.post(this.baseUrl+'/register',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteManager(user:Manager){
    return this._http.delete(this.baseUrl+'/manager/'+user.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  checkEmail(user:Manager){

    return this._http.post(this.baseUrl+'/checkEmail',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createManager(user:Manager){

    return this._http.post(this.baseUrl+'/manager',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateManager(user:Manager){

    return this._http.put(this.baseUrl+'/manager',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(user:Manager){
    this.user=user;
  }
  getter(){
    return this.user;
  }
}
