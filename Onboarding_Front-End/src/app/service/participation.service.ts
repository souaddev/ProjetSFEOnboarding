import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Participation}  from '../module/participation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employe } from '../module/employe';
import { Manager } from '../module/manager';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private participation = new Participation();
  constructor(private _http:Http,private http:HttpClient) { }
  getParticipationsByEmploye(employe:Employe){
    return this._http.post(this.baseUrl+'/Agenda',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getParticipationsByManager(manager:Manager){
    return this._http.post(this.baseUrl+'/Agenda',JSON.stringify(manager),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getParticipations(){
    return this._http.get(this.baseUrl+'/ParticipationList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteParticipation(participation:Participation){
    return this._http.delete(this.baseUrl+'/Participation/'+participation.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createParticipation(participation){

    return this._http.post(this.baseUrl+'/Participation',JSON.stringify(participation),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateParticipation(participation:Participation){

    return this._http.put(this.baseUrl+'/Participation',JSON.stringify(participation),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  checkManager(participation){

    return this._http.post(this.baseUrl+'/checkManager',JSON.stringify(participation),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(participation:Participation){
    this.participation=participation;
  }
  getter(){
    return this.participation;
  }
}
