import { Injectable } from '@angular/core';
import { Constants, URLs } from '../../constants/my-constants'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country, CountrySmall } from '../interfaces/paises.interface';
import { combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = Constants.regiones;

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorNombre(termino: string): Observable<Country[]> {
    const url = `${URLs.apiUrl}${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisesPorCapital(termino: string): Observable<Country[]> {
    const url = `${URLs.apiCapital}${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisesPorCodigo(id: string): Observable<Country[]> {  // por codigo de pais
    const url = `${URLs.apiPaisPorAlpha}${id}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigoSmall(codigo: string): Observable<CountrySmall> {
    //console.log(`getPaisPorCodigoSmall => codigo: ${codigo}`);
    const url = `${URLs.apiPaisPorAlpha}${codigo}?fields=name,cca3`;
    return this.http.get<CountrySmall>(url);
  }

  getPaisesPorRegion(termino: string): Observable<Country[]> {
    let url = `${URLs.apiPorRegion}${termino}`;
    /*
    if ('v2' === Constants.restCountriesVersion) {
      url = `${URLs.apiPorRegionV2}${termino}`;
    }*/
    return this.http.get<Country[]>(url);
  }

  getPaisesFrontera(borders: string[]): Observable<CountrySmall[]> {
    if (!borders) {
      return of([]);
    }
    const peticiones: Observable<CountrySmall>[] = [];
    borders.forEach(codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);

  }
}
