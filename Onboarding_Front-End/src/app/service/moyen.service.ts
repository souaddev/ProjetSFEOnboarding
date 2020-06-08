import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Moyen}  from '../module/moyen';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoyenService {

  private baseUrl:String='http://localhost:9091'
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private moyen = new Moyen();
  constructor(private _http:Http,private http:HttpClient) { }
  getMoyens(){
    return this._http.get(this.baseUrl+'/MoyenList',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getStatistiqueMoyens(){
    return this._http.get(this.baseUrl+'/StatistiqueNombreMoyen',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteMoyen(moyen:Moyen){
    return this._http.delete(this.baseUrl+'/Moyen/'+moyen.id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createMoyen(moyen:Moyen){

    return this._http.post(this.baseUrl+'/Moyen',JSON.stringify(moyen),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateMoyen(moyen:Moyen){

    return this._http.put(this.baseUrl+'/Moyen',JSON.stringify(moyen),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  setter(moyen:Moyen){
    this.moyen=moyen;
  }
  getter(){
    return this.moyen;
  }
}
