import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { asistenciaProfesor } from 'src/interface/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(private http: HttpClient) {}

  getInformacionEquipo(idAlum:string,idEquipo:string){
    const url= environment.baseUrl +"asisEquipo/"+idAlum+"/"+idEquipo;
    return this.http.get(url);
  }
  getInformacionPasante(id:string){
    const url= environment.baseUrl + "asisPasante/"+id;
    return this.http.get(url);
  }
  getInformacionDocente(nombre:string){
    const url= environment.baseUrl +"asisProfe/"+ nombre;
    return this.http.get(url);
  }

  getequipos(){
    const url= environment.baseUrl +"equipos";
    return this.http.get<[]>(url);
  }

  createAistenciaProfesor(asistencia: asistenciaProfesor){
    const url: string = environment.baseUrl+"checkProfe";
    return this.http.post(url, asistencia,{responseType: 'text'});
  }

  createRegistroPrestado(items: object){
    const url: string = environment.baseUrl+"prestar";
    return this.http.post(url, items);
  }
}
