import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})

export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre    : ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email     : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username  : ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password  : ['', [Validators.required, Validators.minLength(6)]],
    repassword: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.camposIguales('password', 'repassword')]
  });

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService
    //private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
      username: 'fernando_her85',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    
    if(errors == null) return '';

    if ( errors['required'] ) {
      return 'Email es obligatorio';
    } else if ( errors['pattern'] ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors['emailTomado'] ) {
      return 'El email ya fue tomado';
    }

    return '';
  }
}
