import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsisteciaPasanteComponent } from './asistecia-pasante/asistecia-pasante.component';
import { AsisteciaEquipoComponent } from './asistecia-equipo/asistecia-equipo.component';
import { AsisteciaProfesorComponent } from './asistecia-profesor/asistecia-profesor.component';



@NgModule({
  declarations: [
    AsisteciaPasanteComponent,
    AsisteciaEquipoComponent,
    AsisteciaProfesorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AsistenciaModule { }
