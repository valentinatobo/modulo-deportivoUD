import { Component, OnInit } from '@angular/core';
import { IngresoService } from 'src/service/ingreso.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  id = "";
  inicialesUsuario = "";
  datosUsuario=[];
  codCargo ="";
  
  
  constructor(private loginService: IngresoService){
  }
  ngOnInit(): void {
    this.getUsuario();
  }

  public getUsuario(){
    this.loginService.getUsuario('63').subscribe(
      (response: any) => {
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

}
