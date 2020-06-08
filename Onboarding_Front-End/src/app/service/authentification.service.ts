import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions, ResponseType} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import{Manager}  from '../module/manager';
import{RessourceHumaine}  from '../module/ressource-humaine';
import{Employe}  from '../module/employe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl:String='http://localhost:9091'
  public ressourceHumaine=new RessourceHumaine();

  constructor(private http:HttpClient) {}

   login(email:String,role:String){
    const headerss = new HttpHeaders().set('Content-Type', 'application/json');
    const optionRequete : Object= {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      })
    };
    return this.http
        .get<any>(
            this.baseUrl +"/login"+role+"/"+email,optionRequete
        )
        .map(res => {
            return res;
        })
        .catch(this.errorHandler); 
       }
      
    LoggedIn(user,role){
      localStorage.setItem('user',JSON.stringify(user));
      localStorage.setItem('role',JSON.stringify(role));
    }

    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('role');
     }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
}
