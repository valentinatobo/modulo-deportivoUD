import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { asistenciaPasante } from 'src/interface/asistencia';
import { AsistenciasService } from 'src/service/asistencias.service';


@Component({
  selector: 'app-asistecia-pasante',
  templateUrl: './asistecia-pasante.component.html',
  styleUrls: ['./asistecia-pasante.component.css']
})
export class AsisteciaPasanteComponent implements OnInit {

  codigoPasante = "";
  informacionPasante = [];

  mensaje = '';
  informacionClase = [];
  informacionEquiposD = [];
  informacionEquiposND = [];
  informacionEquiposP = [];
  public state: 'CLASS' | 'NONE' = 'CLASS';
  consecutivo!: any;
  items: string[] = [];
  itemsPrestados = { id: [''] }
  public _state: 'ADD' | 'NONE' = 'ADD';
  equiposPrestados:any;

  asistencia: asistenciaPasante = {
    CONSECPROGRA: '',
    ID: '',
    FECHAASISRES: ''
  };

  constructor(private asistenciaService: AsistenciasService) { }

  ngOnInit(): void {


  }

  public consultar() {
    this.asistenciaService.getInformacionPasante(this.codigoPasante).subscribe(
      (response: any) => {


       // this.informacionPasante = response[0];
        if(response.length == 0){
          this.mensaje = 'El codgio que ingreso no es de un pasante';
          this.state = 'NONE';
        } else if(typeof response[0] == 'string'){
          this.mensaje = response[1];
          this.state = 'NONE';
        }else if (typeof response[1] == 'string') {
          this.informacionPasante = response[0];
          this.mensaje = response[1];
          this.state = 'NONE';
        } else {
          this.informacionPasante = response[0];
          this.informacionPasante = response[0];
          this.state = 'CLASS';
          this.informacionClase = response[1];
          this.informacionEquiposD = response[2];
          this.informacionEquiposND = response[3]
        }
        console.log(this.informacionPasante)
        console.log(response)
        console.log(typeof response[0])
        console.log(this.informacionPasante[0])
        console.log(this.informacionPasante[1])
      }
    );
    console.log(this.codigoPasante);
  }

  public crearAsistenciaPas() {
    this.asistencia.CONSECPROGRA = this.informacionClase[0];
    this.asistencia.ID = this.informacionPasante[0];
    this.asistencia.FECHAASISRES = '09-08-2022';

    this.asistenciaService.createAistenciaPasante(this.asistencia).subscribe({
      next: (resp) => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        this.consecutivo = resp[1];
        this.items[0] = this.consecutivo;
        this._state = 'NONE'
        console.log('creo assitencia')
      },
      error: error => {
        console.log(error);
      }
    });

  }

  public agregar(pos:number){
    const item = this.informacionEquiposD[pos];
    this.items.push(item[0]);
  }

  public cambiarEstado(){
    this.itemsPrestados.id = this.items;
    this.asistenciaService.createRegistroPrestado(this.itemsPrestados).subscribe({
      next: (resp) => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        console.log('estado Creada!');
        this.equiposPrestados = resp;
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
