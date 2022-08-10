import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor(private http: HttpClient) { }

  getUsuario(id:string){
    const url= environment.baseUrl +"login/"+id;
    return this.http.get(url);
  }
}
