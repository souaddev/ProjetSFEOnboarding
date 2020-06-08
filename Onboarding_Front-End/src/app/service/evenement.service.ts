import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Evenement}  from '../module/evenement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../module/manager';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private evenement = new Evenement();
  constructor(private _http:Http,private http:HttpClient) { }
  getEvenementsByManager(manager:Manager){
    return this._http.post(this.baseUrl+'/EvenementListByManager',JSON.stringify(manager),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getEvenements(){
    return this._http.get(this.baseUrl+'/EvenementList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteEvenement(evenement:Evenement){
    return this._http.delete(this.baseUrl+'/Evenement/'+evenement.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createEvenement(evenement){

    return this._http.post(this.baseUrl+'/Evenement',JSON.stringify(evenement),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateEvenement(evenement:Evenement){

    return this._http.put(this.baseUrl+'/Evenement',JSON.stringify(evenement),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(evenement:Evenement){
    this.evenement=evenement;
  }
  getter(){
    return this.evenement;
  }
}
