import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { Constants } from '../../../../constants/my-constant';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent implements OnInit {

  restCountriesVersion: string = Constants.restCountriesVersion;
  @Input() paises: Country[] = [];  
  constructor() {
  }

  ngOnInit(): void { }

}
