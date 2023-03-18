import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador.component'
// import { HeroeComponent } from './heroes/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListadoComponent]
})
export class AppModule { }
