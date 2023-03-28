import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { Constants } from '../../../../constants/my-constant';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    ` li {
          cursor: pointer
          }
    `]
})

export class PorPaisComponent {
  @Input() termino: string = '';

  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  hayError: boolean = false;
  restCountriesVersion: string = Constants.restCountriesVersion;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;
    //console.log(this.termino);
    this.paisService.buscar(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
        console.info(err);
      });
  }

  sugerencias(termino: string) {
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.paisService.buscar(termino)
      .subscribe((paises) => {
        this.paisesSugeridos = paises.splice(0,5);
      }, (err) => {      
        this.paises = [];
        console.info(err);
      });
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}
