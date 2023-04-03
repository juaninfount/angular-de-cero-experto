import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {
  persona = {
    genero:'F',
    notificaciones:true,
    terminos:false
  };

  terminos: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    genero: [this.persona.genero, Validators.required],
    notificaciones: [this.persona.notificaciones, Validators.required],
    terminos: [this.terminos, Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.miFormulario.reset(this.persona);
   this.miFormulario.valueChanges.subscribe(({ terminos, ...rest }) => {
      //console.log(form)
      this.persona = rest;
   });
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;
    this.persona = formValue;
  }
}
