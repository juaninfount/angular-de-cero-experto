import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})

export class PorPaisComponent {
  @Input() termino:string = '';
  
  paises: Country[] = [];
  hayError:boolean = false;

  constructor(private paisService:PaisService) {}

  buscar( termino:string ){

    this.termino = termino;
    this.hayError = false;
    //console.log(this.termino);

    this.paisService.buscar(this.termino)
      .subscribe( (paises) => {  
      console.log(paises)
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
      console.info(err);
    });
  }

  sugerencias(termino:string){
    this.hayError = false;
    
  }

}
