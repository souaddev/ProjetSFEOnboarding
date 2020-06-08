import { Component, OnInit } from '@angular/core';
import {RessourceHumaine} from '../../module/ressource-humaine'
import{Router}  from '@angular/router';

@Component({
  selector: 'app-hr-profil',
  templateUrl: './hr-profil.component.html',
  styleUrls: ['./hr-profil.component.css']
})
export class HrProfilComponent implements OnInit {

  public rh :RessourceHumaine=new RessourceHumaine();
  constructor() { }

  ngOnInit(): void {
    this.rh=JSON.parse(localStorage.getItem('user'));
  }

}
