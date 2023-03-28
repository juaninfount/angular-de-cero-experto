import { Component, OnInit } from '@angular/core';
import { Country }           from '../../interfaces/pais.interface';
import { PaisService }       from '../../services/pais.service';
import { Constants }         from '../../../../constants/my-constant';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{ margin-right:5px; }
  `]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = Constants.regiones;  
  paises: Country[] = [];
  regionActiva: string = '';

  constructor(private paisService: PaisService) {
    if (Constants.restCountriesVersion === 'v2') {
      this.regiones = Constants.regiones_v2;     
    }
  }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.getPaisPorRegion(this.regionActiva)
      .subscribe((paises) => {
        this.paises = paises;        
      }, (err) => {
        this.paises = [];
      });
  }

  getClaseCSS(region: string): string {
    return (this.regionActiva === region) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
}