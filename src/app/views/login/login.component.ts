import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private autentificacion: AuthenticationService, private router: Router, private formbuilder: FormBuilder) { }
  hide=false;
  dataLogin: any = { usuario: 'marwin', password: '123456', email:"asd@gmail.com",nombres:"Carla", apellidos: "FLores "};
  errorLogin = "";

  registroform = this.formbuilder.group({
    usuario: ['', {
      validators: [
        Validators.required
      ]
    }],
    password: ['', {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }],
  })
  get usuario() { return this.registroform.get('usuario') }
  get password() { return this.registroform.get('password') }
  urlRedireccion = ""
  ngOnInit(): void {
  }


  login() {
    console.log(this.registroform.get('usuario')?.value +"----"+ this.registroform.get('password')?.value);
    if (this.registroform.get('usuario')?.value === this.dataLogin.usuario && this.registroform.get('password')?.value === this.dataLogin.password) {
      this.autentificacion.login()
      this.urlRedireccion = this.autentificacion.urlUsuarioIntentaAcceder
      this.autentificacion.urlUsuarioIntentaAcceder = ''
      this.router.navigate(["/registro"])
    }else
      this.errorLogin = 'Los datos no coinciden'
      //this.router.navigate(["login"])
  }
  // dialog(){
    
  // }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogAnimationsExampleDialog, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
}
// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialogs/required.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
// }