import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  @Input() termino:string = '';
  hayError:boolean = false;

  constructor(private paisService:PaisService){}

  buscar(){

    //this.termino = termino;
    this.hayError = false;

    console.log(this.termino);
    this.paisService.buscar(this.termino).subscribe( resp => {  
      console.log(resp)
    }, (err) => {
      this.hayError = true;
      console.info(err);
    });
  }
}
