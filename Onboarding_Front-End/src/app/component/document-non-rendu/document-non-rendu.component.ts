import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../service/document.service';
import {EmployeService} from '../../service/employe.service';
import {Document} from '../../module/document'
import {Employe} from '../../module/employe'
import{Router}  from '@angular/router';

@Component({
  selector: 'app-document-non-rendu',
  templateUrl: './document-non-rendu.component.html',
  styleUrls: ['./document-non-rendu.component.css']
})
export class DocumentNonRenduComponent implements OnInit {
  public documents:Document[];
  public employe :Employe=new Employe();
  constructor(private documentService:DocumentService) { }

  ngOnInit(): void {
    this.employe=JSON.parse(localStorage.getItem('user'));
    this.listDocumentNonRendu(this.employe);
  }
  listDocumentNonRendu(employe){
    this.documentService.getDocumentsByEmploye(employe).subscribe((documents)=>{
      console.log(documents);
      this.documents=documents;
    },(error)=>{
      console.log(error);
    })
  }
}
