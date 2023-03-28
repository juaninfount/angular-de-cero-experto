import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import LocaleEs from '@angular/common/locales/es-PE';
import LocaleFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocaleEs);
registerLocaleData(LocaleFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule    
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue: 'es-PE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
