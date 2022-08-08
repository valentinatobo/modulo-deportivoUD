import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(private http: HttpClient) {}

  getInformacionDocente(idAlum:string,idEquipo:string){
    const url= "http://localhost:3000/asistencia/profesor/"+idAlum+"/"+idEquipo;
    return this.http.get(url);
  }
  getInformacionPasante(id:string){
    const url= "http://localhost:3000/asistencia/pasante/"+id;
    return this.http.get(url);
  }
  getInformacionEquipo(id:string){
    const url= "http://localhost:3000/asistencia/profesor/"+id;
    return this.http.get(url);
  }
}
