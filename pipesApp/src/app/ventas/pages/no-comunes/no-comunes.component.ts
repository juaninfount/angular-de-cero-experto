import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})

export class NoComunesComponent {
  nombre: string = 'Juan';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa =
    {
      '=0': 'no tenemos ningún cliente',
      '=1': 'tenemos un cliente',
      '-2': 'tenemos 2 clientes',
      'other': 'tenemos # clientes'
    };

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  };

  heroes = [{
    nombre: 'Aquaman',
    vuela: false
  },
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Batman',
    vuela: false
  }]

  miObservable = interval(2000);
  constructor() {
    this.miObservable.subscribe(console.log);
  }

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
