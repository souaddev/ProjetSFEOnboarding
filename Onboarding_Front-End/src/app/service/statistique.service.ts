import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Employe}  from '../module/employe';
import{Manager}  from '../module/manager';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  constructor(private _http:Http,private http:HttpClient) { }
  // Ressource Humaine
  getStatistiqueDocumentNonRendu(){
    return this._http.get(this.baseUrl+'/StatistiqueDocumentNonRendu',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueManager(){
    return this._http.get(this.baseUrl+'/StatistiqueNombreManager',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueEmployeHR(){
    return this._http.get(this.baseUrl+'/StatistiqueNombreEmployeHR',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueDocumentRendu(){
    return this._http.get(this.baseUrl+'/StatistiqueDocumentRendu',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiquePoste(){
    return this._http.get(this.baseUrl+'/StatistiqueNombrePoste',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueEquipe(){
    return this._http.get(this.baseUrl+'/StatistiqueNombreEquipe',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  // Manager
  getStatistiqueEmploye(manager:Manager){
    return this._http.post(this.baseUrl+'/StatistiqueNombreEmployeManager',JSON.stringify(manager),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueEvenementManager(manager:Manager){
    return this._http.post(this.baseUrl+'/StatistiqueNombreEvenement',JSON.stringify(manager),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueParticipationManager(manager:Manager){
    return this._http.post(this.baseUrl+'/StatistiqueNombreParticipationManager',JSON.stringify(manager),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueDemandeMoyen(manager:Manager){
    return this._http.post(this.baseUrl+'/StatistiqueDemandeMoyenManager',JSON.stringify(manager),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueMoyen(){
    return this._http.get(this.baseUrl+'/StatistiqueNombreMoyen',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  // Employe
  getStatistiqueEvenement(employe:Employe){
    return this._http.post(this.baseUrl+'/StatistiqueNombreParticipationEmploye',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueDocumentNonRenduEmploye(employe:Employe){
    return this._http.post(this.baseUrl+'/StatistiqueDocumentRenduByEmploye',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueMembreEquipe(employe:Employe){
    return this._http.post(this.baseUrl+'/StatistiqueNombreEmployeEquipe',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getNombreJour(employe:Employe){
    return this._http.post(this.baseUrl+'/StatistiqueEmployeJour',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
}
