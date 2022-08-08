import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AsistenciasService } from 'src/service/asistencias.service';


@Component({
  selector: 'app-asistecia-pasante',
  templateUrl: './asistecia-pasante.component.html',
  styleUrls: ['./asistecia-pasante.component.sass']
})
export class AsisteciaPasanteComponent implements OnInit {

  codigoPasante= "";
  informacionPasante = [];
  constructor(private asistenciaService: AsistenciasService) { }

  ngOnInit(): void {

    
  }

  public consultar(){
    this.asistenciaService.getInformacionPasante(this.codigoPasante).subscribe(
      (response: any) => {
        this.informacionPasante = response[0];
        console.log(this.informacionPasante)
      }
    );
    console.log(this.codigoPasante);
  }


}
