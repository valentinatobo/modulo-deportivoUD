import { Component, OnInit } from '@angular/core';
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


}
