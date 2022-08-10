import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsisteciaEquipoComponent } from './asistencia/asistecia-equipo/asistecia-equipo.component';
import { AsisteciaPasanteComponent } from './asistencia/asistecia-pasante/asistecia-pasante.component';
import { AsisteciaProfesorComponent } from './asistencia/asistecia-profesor/asistecia-profesor.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AsisteciaProfesorComponent },
    { path: 'detail/:id', component: AsisteciaEquipoComponent },
    { path: 'heroes', component: AsisteciaPasanteComponent }
  ];

}
