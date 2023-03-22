import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey:string = 'IfTiv063ILvPVrBP4LYYOjnPIKk2v4l0';
  private _historial:string[] = [];
  private _servicioUrl:string = 'https://api.giphy.com/v1/gifs'; 

  public resultados: Gif[] = [];
  
  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    /*
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }  */ 
  }

  get historial(){    
    return [...this._historial];
  }

  buscarGifs( query:string='' ){
    let limit = 10;
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,limit-1);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
   
    const params = new HttpParams()                
                .set('api_key',this._apiKey)
                .set('limit', limit.toString())
                .set('q', query);

    //this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`)
    console.log(`${this._servicioUrl}/search` , {params} );    
    this.http.get<SearchGifsResponse>(`${this._servicioUrl}/search` ,{params} )
                .subscribe(( resp ) => {
                this.resultados = resp.data;
                localStorage.setItem('resultados', JSON.stringify(this.resultados));
                //console.log(resp.data);
             });
   
  }
}
