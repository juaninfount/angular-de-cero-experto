import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  //@Input() producto;

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto : 'rtx',
    precio: 10,
    existencia: 10
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    let answer = !this.miFormulario?.controls['producto']?.invalid 
       && this.miFormulario?.controls['producto']?.touched 
       && this.miFormulario?.controls['producto']?.value.length == 3;
      return !answer;
  }

  precioValido(): boolean{
    let answer = this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value > 0;
    return !answer;
  }

  guardar() {
    console.log('Posteo correcto');
    /*
    if(this.miFormulario.controls['precio'].value === 0){
      console.log('NO POSTEADO');
      return;
    }
    */

    this.miFormulario.resetForm({
      precio: 0,
      existencia: 0,
      producto: ''
    });
  }

}
