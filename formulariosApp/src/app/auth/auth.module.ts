import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent    } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
