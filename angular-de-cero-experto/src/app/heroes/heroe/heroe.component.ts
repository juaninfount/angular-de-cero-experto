import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent{
    nombre:string = "Ironman";
    edad:number = 45;
    title:string = "Heroe Component Works";
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }
    getNombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    cambiarNombre(){
        this.nombre = "Spiderman";
    }
    cambiarEdad(){
        console.log('hey');
        this.edad = 23;
    }
}