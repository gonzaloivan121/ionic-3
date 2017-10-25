import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  miFormulario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
    ) {
    this.miFormulario = this.crearMiFormulario();
  }

  saveData(){
    console.log(this.miFormulario.value);
  }

  private crearMiFormulario(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      repetirContrasena: this.formBuilder.group({
        contrasena: ['', Validators.required],
        confirmarContrasena: ['', Validators.required]
        }),
      genero: ['', Validators.required],
    });
  }
}