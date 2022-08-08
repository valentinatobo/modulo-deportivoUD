import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor(private http: HttpClient) { }

  getUsuario(id:string){
    const url= "http://localhost:3000/login/"+id;
    return this.http.get(url);
  }
}
