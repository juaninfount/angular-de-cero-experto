import { NgModule              } from '@angular/core';
import { CommonModule          } from '@angular/common';
import { ReactiveFormsModule   } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { PaisesRoutingModule   } from './paises-routing.module';

@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  exports:[],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaisesRoutingModule    
  ]
})
export class PaisesModule { }
