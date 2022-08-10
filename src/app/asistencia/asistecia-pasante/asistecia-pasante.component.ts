import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AsistenciasService } from 'src/service/asistencias.service';


@Component({
  selector: 'app-asistecia-pasante',
  templateUrl: './asistecia-pasante.component.html',
  styleUrls: ['./asistecia-pasante.component.css']
})
export class AsisteciaPasanteComponent implements OnInit {

  codigoPasante= "";
  informacionPasante = [];

  mensaje = '';
  informacionClase = [];
  informacionEquiposD = [];
  informacionEquiposND = [];
  informacionEquiposP = [];
  public state: 'CLASS'|'NONE' = 'CLASS';
  constructor(private asistenciaService: AsistenciasService) { }

  ngOnInit(): void {

    
  }

  public consultar(){
    this.asistenciaService.getInformacionPasante(this.codigoPasante).subscribe(
      (response: any) => {

        
      this.informacionPasante = response[0];
       if(typeof response[1] == 'string'){ 
            
            this.mensaje = response[1];
            this.state = 'NONE';
          }else{
            this.informacionPasante = response[0];
            this.state = 'CLASS';
            this.informacionClase =response[1];
            this.informacionEquiposD = response[2];
            this.informacionEquiposND = response[3]
          }
        console.log(this.informacionPasante)
        console.log(typeof response)
        console.log(typeof response[0])
        console.log(this.informacionPasante[0])
        console.log(this.informacionPasante[1])
      }
    );
    console.log(this.codigoPasante);
  }


}
