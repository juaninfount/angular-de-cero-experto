import { Component } from '@angular/core';
import { TemplateModule } from '../../template/template.module';

interface MenuItem {
  texto: string,
  ruta: string
};

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html'
})

export class SidemenuComponent {

  templateMenu: MenuItem[] = [{
    texto: 'Básicos',
    ruta: '../template/basicos'
  }, {
    texto: 'Dinámicos',
    ruta: '../template/dinamicos'
  }, {
    texto: 'Switches',
    ruta: '../template/switches'
  }];

  reactiveMenu: MenuItem[] = [{
    texto: 'Básicos',
    ruta: '../reactive/basicos'
  }, {
    texto: 'Dinámicos',
    ruta: '../reactive/dinamicos'
  }, {
    texto: 'Switches',
    ruta: '../reactive/switches'
  }]

  authMenu: MenuItem[] = [{
    texto: 'Login',
    ruta: '../auth/login'
  },
  {
    texto: 'Registro',
    ruta: '../auth/registro'
  }];

};
