import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private rutaActiva: ActivatedRoute) { }
  username = "";
  ngOnInit(){
    this.username =  this.rutaActiva.snapshot.params["username"];
  }
  
}
