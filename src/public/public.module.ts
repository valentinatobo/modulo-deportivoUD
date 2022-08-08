import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
