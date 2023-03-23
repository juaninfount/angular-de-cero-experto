import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _apiUrl:string = 'https://restcountries.com/v3.1/name/';
  
  constructor(private http:HttpClient) {
    
  }

  buscar(termino:string): Observable<any>{
    const url = `${this._apiUrl}${termino}`;
    return this.http.get(url);
  }
}
