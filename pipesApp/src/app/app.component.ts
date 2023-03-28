import { Component } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Fulano';
  valor:number = 1000;
  obj = {nombre:'Zutano'};

  mostrarNombre(){
    this.nombre =this. obj.nombre;
    console.log(this.nombre);
    console.log(this.obj);
  }

  constructor(private primeNGConfig: PrimeNGConfig){}
}