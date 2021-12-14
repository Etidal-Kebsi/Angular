import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
liste:any=[]
le:any = {  "id":0, "nom":""}
  constructor(private gest:GestionService , private route:Router) { 
    this.getEtudiant();
  }


  
  ngOnInit(): void {
  }
  getEtudiant(){
    this.gest.getAllEtudiants().subscribe(
      {
        next : (data:any) => {  this.liste = data;},
        error : (err:any) => {  },
        complete : () =>  {  }
      }
    )
  }

  delete(id:number){
    this.gest.deleteEtudiant(id).subscribe(
      {
        next : (data:any) => {  this.getEtudiant()},
        error : (err:any) => {  },
        complete : () =>  {  }
      }
    )
  }

}
