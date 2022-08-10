import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/public/login/login.component';
import { AppComponent } from './app.component';
import { AsisteciaEquipoComponent } from './asistencia/asistecia-equipo/asistecia-equipo.component';
import { AsisteciaPasanteComponent } from './asistencia/asistecia-pasante/asistecia-pasante.component';
import { AsisteciaProfesorComponent } from './asistencia/asistecia-profesor/asistecia-profesor.component';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { InformesModule } from './informes/informes.module';

const routes: Routes = [

  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path: 'asistencia',
    component:AsistenciaModule
  },
  {
    path: 'registros',
    component: InformesModule
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
