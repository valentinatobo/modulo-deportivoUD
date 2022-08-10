import { Component, OnInit } from '@angular/core';
import { InformesService } from 'src/service/informes.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css']
})
export class AsistenciasComponent implements OnInit {

  constructor(private infirneService: InformesService) { }

  ngOnInit(): void {
    this.getInformePasantes();
    this.getInformeEquipos();
  }

  public getInformePasantes(){
    this.infirneService.getpasantes().subscribe({
      next: (resp) => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        console.log(resp);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public getInformeEquipos(){
    this.infirneService.getequipos().subscribe({
      next: (resp) => {
        // this.alertService.success('User added', { keepAfterRouteChange: true });
        console.log(resp);
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
