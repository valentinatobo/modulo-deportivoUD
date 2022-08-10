import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsisteciaPasanteComponent } from './asistecia-pasante/asistecia-pasante.component';
import { AsisteciaEquipoComponent } from './asistecia-equipo/asistecia-equipo.component';
import { AsisteciaProfesorComponent } from './asistecia-profesor/asistecia-profesor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AsisteciaPasanteComponent,
    AsisteciaEquipoComponent,
    AsisteciaProfesorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    AsisteciaPasanteComponent,
    AsisteciaEquipoComponent,
    AsisteciaProfesorComponent,
    

  ]
})
export class AsistenciaModule { }
