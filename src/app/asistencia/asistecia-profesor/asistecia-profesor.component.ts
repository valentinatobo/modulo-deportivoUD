import { Component, OnInit } from '@angular/core';
import { asistenciaProfesor } from 'src/interface/asistencia';
import { AsistenciasService } from 'src/service/asistencias.service';

@Component({
  selector: 'app-asistecia-profesor',
  templateUrl: './asistecia-profesor.component.html',
  styleUrls: ['./asistecia-profesor.component.css']
})
export class AsisteciaProfesorComponent implements OnInit {
 

  nombreProfesor='';
  informacionProfesor = [];
  
  informacionClase = [];
  informacionEquiposD = [];
  informacionEquiposND = [];
  informacionEquiposP = [];
  equiposPrestados:any;
  consecutivo!:any ;
  items:string[]=[];
  itemsPrestados ={id:['']}
  mensaje = '';
  public state: 'CLASS'|'NONE' = 'CLASS';
  public _state: 'ADD'|'NONE' = 'ADD';
  constructor(private asisService : AsistenciasService) { }

  ngOnInit(): void {
  }

  asistencia : asistenciaProfesor={
    CONSECPROGRA: '',
    ID : '',
    FECHAASISRES: ''
  };

  public consultarProfesor(){
      this.asisService.getInformacionDocente(this.nombreProfesor).subscribe(
        (response: any) => {
          this.informacionProfesor = response[0];
          if(typeof response[1] == 'string'){ 
            this.mensaje = response[1];
            this.state = 'NONE';
          }else{
            this.state = 'CLASS';
            this.informacionClase =response[1];
            this.informacionEquiposD = response[2];
            this.informacionEquiposND = response[3]
          }
          //this.informacionProfesor = response;
        }
      );
  }

  
  public crearAsistencia(){
    this.asistencia.CONSECPROGRA = this.informacionClase[0];
    this.asistencia.ID =this.informacionProfesor[0];
    this.asistencia.FECHAASISRES =this.informacionProfesor[4];

    this.asisService.createAistenciaProfesor(this.asistencia).subscribe({
      next: (resp) => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        this.consecutivo = resp[1];
        this.items[0] = this.consecutivo;
        this._state = 'NONE'
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
    this.asisService.createRegistroPrestado(this.itemsPrestados).subscribe({
      next: (resp) => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        console.log('Asistencia Creada!');
        this.equiposPrestados = resp;

      },
      error: error => {
        console.log(error);
      }
    });
  }

}
