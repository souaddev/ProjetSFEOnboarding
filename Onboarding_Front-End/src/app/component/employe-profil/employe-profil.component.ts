import { Component, OnInit } from '@angular/core';
import {Employe} from '../../module/employe'
import{Router}  from '@angular/router';

@Component({
  selector: 'app-employe-profil',
  templateUrl: './employe-profil.component.html',
  styleUrls: ['./employe-profil.component.css']
})
export class EmployeProfilComponent implements OnInit {
  public employe :Employe=new Employe();
  constructor() { }

  ngOnInit(): void {
    this.employe=JSON.parse(localStorage.getItem('user'));
  }

}
