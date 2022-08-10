import { Component, OnInit } from '@angular/core';
import { IngresoService } from 'src/service/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id = "";
  inicialesUsuario = "";
  datosUsuario=[];
  codCargo ="";
  mensaje="";

  public state: 'LOGIN'|'ASISTENCIA'|'DIRECTOR' = 'LOGIN';
  public Asis: 'PASANTE'|'EQUIPO'|'PROFESOR' = 'PASANTE';
  
  
  constructor(private loginService: IngresoService){
  }
  ngOnInit(): void {
    // this.getUsuario();
    // this.loginService.getUsuario(this.id).subscribe(
    //   (response: any) => {
    //     this.datosUsuario = response;
    //     this.codCargo = response[0];
    //     // this.getInicialesUsuario(response[1]);
    //     console.log(this.datosUsuario)
    //   }
    // );
  }

  addItem(newItem: string) {
    console.log(newItem);
    if(newItem=='PASANTE'){
      this.Asis='PASANTE'
    }else if(newItem=='EQUIPO'){
      this.Asis='EQUIPO'
    }else if(newItem=='DOCENTE'){
      this.Asis='PROFESOR'
    }
  }

  public getUsuario(){
    console.log(this.id);

    this.loginService.getUsuario(this.id).subscribe(
      (response: any) => {

        if(response[0]=='1'){
          this.state='ASISTENCIA'
        }else if(response[0]=='3'){
          this.state='DIRECTOR'
        }else{
          this.mensaje='usted no tiene permisos de ingreso';
        }

        this.datosUsuario = response;
        this.codCargo = response[0];
        this.getInicialesUsuario(response[1]);
        console.log(this.datosUsuario)
      }
    );
  }
  title = 'modulo-deportivoUD';

  public getInicialesUsuario(nombreUsuario: string){
    let nombre = nombreUsuario.split(" ",2);
    console.log(nombre)
    this.inicialesUsuario = nombre[0].substring(0,1)+nombre[1].substring(0,1);
    console.log(this.inicialesUsuario)
  }

  public logout(){
    this.state='LOGIN'
  }

}
