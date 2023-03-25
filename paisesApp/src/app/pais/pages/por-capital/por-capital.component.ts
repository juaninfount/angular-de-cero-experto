import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  @Input() termino:string = '';
  paises: Country[] = [];
  hayError:boolean = false;
  
  constructor(private paisService:PaisService) {}
  
  buscar( termino:string ){

    this.termino = termino;
    this.hayError = false;    

    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises) => {   
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
      //console.info(err);
    });
  }

  sugerencias(termino:string){
    this.hayError = false;    
  }
}
