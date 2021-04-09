import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecuperarDadosService} from './recuperar-dados.service'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    RecuperarDadosService
  ],
  exports:[]
})
export class SharedModule { }
