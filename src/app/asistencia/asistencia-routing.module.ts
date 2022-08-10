import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsisteciaEquipoComponent } from "./asistecia-equipo/asistecia-equipo.component";
import { AsisteciaPasanteComponent } from "./asistecia-pasante/asistecia-pasante.component";
import { AsisteciaProfesorComponent } from "./asistecia-profesor/asistecia-profesor.component";

const routes: Routes = [

    {
      path: 'pasante',
      component: AsisteciaPasanteComponent
    },
    {
      path: 'docente',
      component: AsisteciaProfesorComponent
    },
    {
      path: 'equipo',
      component:AsisteciaEquipoComponent
    }
  
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AsistenciaRoutingModule {
  
  }
  