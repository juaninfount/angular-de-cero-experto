import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([], Validators.required)   
  });

  nuevofavorito: FormControl = this.fb.control('', Validators.required);
  constructor(private fb: FormBuilder){}

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if(this.nuevofavorito.invalid){
      return;
    }
    this.favoritosArr.push( new FormControl(this.nuevofavorito.value, Validators.required) );
    this.nuevofavorito.reset();
  }

  get favoritosArr(){    
    return this.miFormulario.get('favoritos') as FormArray;
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  eliminar(index:number){
    this.favoritosArr.removeAt( index );
    this.nuevofavorito.reset();
  }
}
