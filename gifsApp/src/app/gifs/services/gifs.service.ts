import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey:string = 'IfTiv063ILvPVrBP4LYYOjnPIKk2v4l0';
  private _historial:string[] = [];

  public resultados: Gif[] = [];
  
  constructor(private http: HttpClient) { }

  get historial(){    
    return [...this._historial];
  }

  buscarGifs( query:string='' ){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);
    }
   
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=IfTiv063ILvPVrBP4LYYOjnPIKk2v4l0&q=${query}&limit=25&offset=0&rating=g&lang=en`)
             .subscribe(( resp:SearchGifsResponse ) => {
                this.resultados = resp.data;
                console.log(resp.data);
             });

    //console.log(this._historial);
  }
}
