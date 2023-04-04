import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { PaisesService } from '../../services/paises.service';
import { Country, CountrySmall } from '../../interfaces/paises.interface';
import { Constants, URLs } from '../../../constants/my-constants';
import { of } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

  regiones: string[] = [];
  paises: Country[] = [];
  fronteras: CountrySmall[] = [];
  cargando: boolean = false;
  _constants = Constants;


  miFormulario: FormGroup = this.fb.group({
    regiones : ['', Validators.required],
    paises   : ['', Validators.required],
    fronteras: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private paisesService: PaisesService) {
  }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    // Cuando cambie seleccion por region
    this.miFormulario.get('regiones')?.valueChanges
      .pipe(
        tap((src) => {          
          this.paises = [];
          this.fronteras = [];
          //this.miFormulario.get('paises')?.reset('');
          this.miFormulario.get('fronteras')?.reset('');
          this.cargando = true;
        }),
        switchMap(region => this.paisesService.getPaisesPorRegion(region))
      ).subscribe(paises => {
        paises.sort((a, b) => { return a.name.common.localeCompare(b.name.common); });
        this.paises = paises;
        this.cargando = false;       
      }, (err) => {
        console.log(err);
        this.miFormulario.get('paises')?.reset('');
        this.miFormulario.get('fronteras')?.reset('');
        this.paises = [];
        this.fronteras = [];
        this.cargando = false;
      });

    this.miFormulario.get('paises')?.valueChanges
      .pipe(
        tap(() => {
          //console.log('cambio de seleccion en control paises.');
          this.miFormulario.get('fronteras')?.reset('');
          this.fronteras = [];
          this.cargando = true;
        }),
        switchMap(codigo => {          
          return this.paisesService.getPaisesPorCodigo(codigo);
        }),
        switchMap(pais => this.paisesService.getPaisesFrontera(pais[0].borders))
      )
      .subscribe(paises => {
        //console.log(paises);
        this.fronteras = paises;
        this.cargando = false;
      }, 
      (err) => {        
        this.miFormulario.get('fronteras')?.reset('');
        this.fronteras = [];
        this.cargando = false;
      });

  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}