import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Poste}  from '../module/poste';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private poste = new Poste();
  constructor(private _http:Http,private http:HttpClient) { }
  getPostes(){
    return this._http.get(this.baseUrl+'/PosteList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deletePoste(poste:Poste){
    return this._http.delete(this.baseUrl+'/Poste/'+poste.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createPoste(poste:Poste){

    return this._http.post(this.baseUrl+'/Poste',JSON.stringify(poste),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updatePoste(poste:Poste){

    return this._http.put(this.baseUrl+'/Poste',JSON.stringify(poste),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(poste:Poste){
    this.poste=poste;
  }
  getter(){
    return this.poste;
  }
}
