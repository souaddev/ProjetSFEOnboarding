import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Document}  from '../module/document';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employe } from '../module/employe';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private document = new Document();
  constructor(private _http:Http,private http:HttpClient) { }
  getDocuments(){
    return this._http.get(this.baseUrl+'/DocumentList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getDocumentsNonRendu(){
    return this._http.get(this.baseUrl+'/DocumentNonRendu',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getDocumentsByEmploye(employe:Employe){
    return this._http.post(this.baseUrl+'/DocumentNotify',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  notifyEmploye(document:Document){

    return this._http.post(this.baseUrl+'/NotifyEmploye',JSON.stringify(document),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  getDocumentStatistique(){
    return this._http.get(this.baseUrl+'/StatistiqueDocumentRendu',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getDocumentNonRenduStatistique(){
    return this._http.get(this.baseUrl+'/StatistiqueDocumentNonRendu',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getDocumentStatisiqueByEmploye(employe:Employe){
    return this._http.post(this.baseUrl+'/StatistiqueDocumentRenduByEmploye',JSON.stringify(employe),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteDocument(document:Document){
    return this._http.delete(this.baseUrl+'/Document/'+document.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createDocument(document){

    return this._http.post(this.baseUrl+'/Document',JSON.stringify(document),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateDocument(document:Document){

    return this._http.put(this.baseUrl+'/Document',JSON.stringify(document),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  checkManager(document){

    return this._http.post(this.baseUrl+'/checkManager',JSON.stringify(document),  this.options).map((response:Response)=>response.json())
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
