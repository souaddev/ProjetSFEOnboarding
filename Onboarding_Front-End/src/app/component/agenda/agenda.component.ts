import { Component, OnInit } from '@angular/core';
import {ParticipationService} from '../../service/participation.service';
import {Participation} from '../../module/participation'
import {Employe} from '../../module/employe'
import{Router}  from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  public participations:Participation[];
  Math: any;
  public colors=["primary","success","danger","warning","info","dark"];
  public pictures=["event1","event2","event3","event4","event5"];
  date:Date=new Date();
  pipe = new DatePipe('en-US');
  public employe=new Employe();
  constructor(private participationService:ParticipationService,private router:Router) {
    this.Math = Math;
   }

  ngOnInit(): void {
    if(localStorage.getItem('user')==null){
      this.router.navigate(['/login']);
    } 
    this.employe=JSON.parse(localStorage.getItem('user'));
    this.listeParticipationsByEmploye(this.employe);
    console.log(this.employe);
    //let show = this.colors[Math.floor(Math.random() * this.colors.length)];
  
  }

  listeParticipationsByEmploye(employe){
    this.participationService.getParticipationsByEmploye(employe).subscribe((participations)=>{
      console.log(participations);
      this.participations=participations;
    },(error)=>{
      console.log(error);
    })
  }

  format(date){
    return  this.pipe.transform(date, 'MM/dd/yyyy');
 }

}
