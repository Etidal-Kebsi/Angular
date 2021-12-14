import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  getAllEtudiants(){
    return  this.http.get("http://127.0.0.1:8080/etudiants");

  }
  addEtudiant(et:any){
    return this.http.post("http://127.0.0.1:8080/addEtudiant" , et)
  }
  deleteEtudiant(id:number){
    return this.http.delete("http://localhost:8080/deleteEtudiant/"+id)
  }

}
