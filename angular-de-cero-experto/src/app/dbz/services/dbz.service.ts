import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes:Personaje[] = [];

    getPersonajes():Personaje[] {
        return [...this._personajes];
    }

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

    constructor(){
        console.log('Servicio inicializado');
    }
}