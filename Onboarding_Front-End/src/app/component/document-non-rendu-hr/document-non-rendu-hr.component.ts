import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../service/document.service';
import {EmployeService} from '../../service/employe.service';
import {Document} from '../../module/document'
import {Employe} from '../../module/employe'
import{Router}  from '@angular/router';

@Component({
  selector: 'app-document-non-rendu-hr',
  templateUrl: './document-non-rendu-hr.component.html',
  styleUrls: ['./document-non-rendu-hr.component.css']
})
export class DocumentNonRenduHrComponent implements OnInit {

  public documents:Document[];
  constructor(private documentService:DocumentService) { }

  ngOnInit(): void {
    // this.employe=JSON.parse(localStorage.getItem('user'));
    this.listDocumentNonRendu();
  }
  listDocumentNonRendu(){
    this.documentService.getDocumentsNonRendu().subscribe((documents)=>{
      console.log(documents);
      this.documents=documents;
    },(error)=>{
      console.log(error);
    })
  }

}
