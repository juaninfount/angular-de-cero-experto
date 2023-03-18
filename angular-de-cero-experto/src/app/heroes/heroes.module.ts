import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({ 
    declarations:[
        AppComponent,        
        HeroeComponent
    ],
    imports:[
        BrowserModule,
        HeroesModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class HeroesModule{

}