import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Moyen}  from '../module/moyen';
import{Manager}  from '../module/manager';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DemandeMoyen } from '../module/demande-moyen';
import { Employe } from '../module/employe';

@Injectable({
  providedIn: 'root'
})
export class DemandeMoyenService {
  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private document = new Document();
  constructor(private _http:Http,private http:HttpClient) { }

  createDocumentAll(employe:Employe,manager:Manager,moyens:Array<Moyen>){
    return this._http.post(this.baseUrl+'/CreateDemande/'+employe+'/'+manager+'/'+moyens,  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  createDocument(demandeMoyen:DemandeMoyen){
    return this._http.post(this.baseUrl+'/DemandeMoyen',JSON.stringify(demandeMoyen), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(document:Document){
    this.document=document;
  }
  getter(){
    return this.document;
  }
}
