import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor( private autentificacion: AuthenticationService, private rutaActiva: ActivatedRoute) { }
  // constructor(private autentificacion: AuthenticationService, private router: Router, private formbuilder: FormBuilder) { }
  username= ""
  lastname=""
  email=""
  ngOnInit(){
    this.username =  this.rutaActiva.snapshot.params["name"] || "";
    this.lastname =  this.rutaActiva.snapshot.params["lastname"];
    this.email =  this.rutaActiva.snapshot.params["email"];
  }
}
