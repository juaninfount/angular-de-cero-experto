import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListadoComponent } from '../heroes/listado/listado.component';
import { HeroeComponent } from '../heroes/heroe/heroe.component';
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({ 
    declarations:[             
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        //BrowserModule,
        CommonModule
    ],
    providers:[],
    bootstrap:[]
})
export class HeroesModule{

}