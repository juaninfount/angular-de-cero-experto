import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html'
})

export class NumerosComponent {
  ventasNetas : number = 129273002;
  ventasBrutas: number = 129279349;
  porcentaje:number = 0.27;
}
