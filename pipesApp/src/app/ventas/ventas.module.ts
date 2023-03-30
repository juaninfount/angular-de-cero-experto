import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }           from '@angular/common';
import { PrimeNgModule }          from '../prime-ng/prime-ng.module';
import { NumerosComponent }       from './pages/numeros/numeros.component';
import { BasicosComponent }       from './pages/basicos/basicos.component';
import { NoComunesComponent }     from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent }       from './pages/ordenar/ordenar.component';

//import { TableModule } from 'primeng/table';
import { MayusculasPipe }         from './pipes/mayusculas.pipe';
import { VuelaPipe }              from './pipes/vuela.pipe';
import { OrdenarPipe }            from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    NumerosComponent,  // components
    BasicosComponent ,
    NoComunesComponent,
    OrdenarComponent,
    MayusculasPipe, // pipes 
    VuelaPipe,
    OrdenarPipe
  ],
  exports:[
    NumerosComponent, 
    NoComunesComponent, 
    BasicosComponent ,
    OrdenarComponent   
  ],
  imports: [
    CommonModule,
    PrimeNgModule    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class VentasModule { }
