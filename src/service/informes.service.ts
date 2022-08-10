import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformesService {

  constructor(private http: HttpClient) { }

  getequipos(){
    const url= environment.baseUrl +"horasEquip";
    return this.http.get<[]>(url);
  }
  getpasantes(){
    const url= environment.baseUrl +"horasPas";
    return this.http.get<[]>(url);
  }
}
