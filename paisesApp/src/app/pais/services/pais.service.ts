import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface'; 
import { Constants } from '../../../constants/my-constant'

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _apiUrl:string            = 'https://restcountries.com/v3.1/name/';
  private _apiCapital:string        = 'https://restcountries.com/v3.1/capital/';
  private _apiPaisPorAlpha:string   = 'https://restcountries.com/v3.1/alpha/';
  private _apiPorRegion:string      = 'https://restcountries.com/v3.1/region/';
  private _apiPorRegionV2:string    = 'https://restcountries.com/v2/regionalbloc/';  
  
  constructor(private http:HttpClient) {    
  }

  buscar(termino:string): Observable<Country[]>{
    const url = `${this._apiUrl}${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this._apiCapital}${termino}`;
    return this.http.get<Country[]>(url); 
  }

  getPaisPorAlpha(id:string):Observable<Country[]>{  // por codigo de pais
    const url = `${this._apiPaisPorAlpha}${id}`;
    return this.http.get<Country[]>(url); 
  }

  getPaisPorRegion(termino:string):Observable<Country[]>{ 
    let url = `${this._apiPorRegion}${termino}`;
    if('v2' === Constants.restCountriesVersion){
      url = `${this._apiPorRegionV2}${termino}`;
    }
    return this.http.get<Country[]>(url); 
  }
}