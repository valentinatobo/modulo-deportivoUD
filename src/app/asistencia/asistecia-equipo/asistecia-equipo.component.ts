import { Component, OnInit } from '@angular/core';
import { asistenciaEquipo } from 'src/interface/asistencia';
import { AsistenciasService } from 'src/service/asistencias.service';

@Component({
  selector: 'app-asistecia-equipo',
  templateUrl: './asistecia-equipo.component.html',
  styleUrls: ['./asistecia-equipo.component.css']
})
export class AsisteciaEquipoComponent implements OnInit {

  constructor(private asisService : AsistenciasService) { }

  idEstudiante ='';
  idEquipo ='';
  idsEquipo =[];
  informacionEquipo=[];
  mensaje = '';
  public state: 'CLASS'|'NONE' = 'CLASS';

  asistencia : asistenciaEquipo={
    codigo: '',
    equipo : '',
  };

  ngOnInit(): void {

    this.asisService.getequipos().subscribe((response:[])=>{
      this.idsEquipo=response;
      console.log(this.idsEquipo)
    })
  }

  public consultarEstudiante(){
    this.asisService.getInformacionEquipo(this.idEstudiante,this.idEquipo).subscribe(
      (response: any) => {
        this.informacionEquipo = response;
        console.log(this.informacionEquipo)
      }
    );
  }

  public registrarAsistencia(){
    this.asistencia.equipo = this.idEquipo;
    this.asistencia.codigo = this.idEstudiante
    this.asisService.createAistenciaEquipo(this.asistencia).subscribe({
      next: (resp) => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        console.log(resp)
        if(resp == 'Asistencia Registrada'){
          this.consultarEstudiante()
        }else{
          this.state = 'NONE';
          this.mensaje = resp;
        }
        
      },
      error: error => {
        console.log(error);
      }
    });
  }


}
