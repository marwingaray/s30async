import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  save:boolean = false;
  enviado = false;

  constructor(private autentificacion: AuthenticationService, private router: Router, private formbuilder: FormBuilder) { }


  registroform = this.formbuilder.group({
    nombres: ['', {
      validators: [
        Validators.required,
      ]
    }],
    usuario: ['', {
      validators: [
        Validators.required
      ]
    }],
    password: ['', {
      validators: [
        Validators.required,
      ]
    }]
  })

  ngOnInit(){
    this.enviado = false;

  }
  get nombres() { return this.registroform.get('nombres') }
  get usuario() { return this.registroform.get('usuario') }
  get password() { return this.registroform.get('password') }


  EnviarMensaje() {
    alert('Mensaje: ' + '\n ha sido enviado' );
    this.enviado = true;
    this.save = true
  }
  


  SalirDeRuta(): Observable<boolean> | boolean {
    if (this.enviado) {
      return true;
    }
    if(this.registroform.dirty){
      const confirmar = confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
      return confirmar;
    // if(this.registroform.controls.nombres.value !="" && this.registroform.controls.apellidos.value !="" && this.registroform.controls.usuario.value !="" && this.registroform.controls.password.value !="" && this.enviado){
      
    }
    return true
    //return false
    // if (this.registroform.invalid || this.enviado) {
    //   return true;
    // }

    
  }
}
