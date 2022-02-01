import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.pattern( this.vs.nombreApellidoPattern )] ],
    email: [ '', [Validators.required, Validators.pattern( this.vs.emailPattern )], [ this.emailValidator ] ],
    username: [ '', [Validators.required, this.vs.noPuedeSerUsuario ] ],
    password: [ '', [Validators.required, Validators.minLength(6) ] ],
    password2: [ '', [Validators.required ] ],
  },{
    validators: [  this.vs.mismaContraseña('password', 'password2') ]
  })

  get emailErrorsMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.required ) {
      return "Email requerido";
    }
    if ( errors?.pattern ) {
      return "Formato de correo erróneo";
    }
    if ( errors?.emailDuplicado ) {
      return "Correo duplicado";
    }
    return null;
  }

  constructor( private fb: FormBuilder,
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jose Campos',
      email: 'test1@test.com',
      username: 'JoseLuis',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
