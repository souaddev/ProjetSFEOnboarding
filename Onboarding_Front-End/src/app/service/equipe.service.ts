import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Equipe}  from '../module/equipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private equipe = new Equipe();
  constructor(private _http:Http,private http:HttpClient) { }
  getEquipes(){
    return this._http.get(this.baseUrl+'/EquipeList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteEquipe(equipe:Equipe){
    return this._http.delete(this.baseUrl+'/Equipe/'+equipe.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createEquipe(equipe){

    return this._http.post(this.baseUrl+'/EquipeAdd',JSON.stringify(equipe),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateEquipe(equipe:Equipe){

    return this._http.put(this.baseUrl+'/Equipe',JSON.stringify(equipe),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  checkManager(equipe){

    return this._http.post(this.baseUrl+'/checkManager',JSON.stringify(equipe),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(equipe:Equipe){
    this.equipe=equipe;
  }
  getter(){
    return this.equipe;
  }
}
