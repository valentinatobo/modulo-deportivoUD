import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciasComponent } from './asistencias/asistencias.component';



@NgModule({
  declarations: [
    AsistenciasComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    AsistenciasComponent
  ]
})
export class InformesModule { }
