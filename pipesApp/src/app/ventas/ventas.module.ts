import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NumerosComponent,
    BasicosComponent ,
    NoComunesComponent,
    OrdenarComponent
  ],
  exports:[
    NumerosComponent, 
    NoComunesComponent, 
    BasicosComponent ,
    OrdenarComponent   
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    TableModule
  ]
})
export class VentasModule { }
