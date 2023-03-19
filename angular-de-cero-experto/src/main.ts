import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
//import '../src/01-tipos-basicos'
//import '../src/06-desestructuracion-funciones'
//import '../src/07-import-export'
//import '../src/08-clases'
//import './09-genericos'
//import './10-decoradores'
//import './11-optional-chaining'
import { ContadorComponent } from './app/contador.component';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


















