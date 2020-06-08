import { Component, OnInit } from '@angular/core';
import {Manager} from '../../module/manager'
import{Router}  from '@angular/router';

@Component({
  selector: 'app-manager-profil',
  templateUrl: './manager-profil.component.html',
  styleUrls: ['./manager-profil.component.css']
})
export class ManagerProfilComponent implements OnInit {

  public manager :Manager=new Manager();
  constructor() { }

  ngOnInit(): void {
    this.manager=JSON.parse(localStorage.getItem('user'));
    console.log(this.manager);
  }

}
