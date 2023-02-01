import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';
import { DeactivateGuard } from './deactivate.guard';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegistroComponent } from './views/registro/registro.component';

const routes: Routes = [
  {path:'', component:LoginComponent, title:'Iniciar sesion'},
  {path:'login', component:LoginComponent, title:'Iniciar sesion'},
  {path:'error', component:ErrorComponent, title:'Sin permisos'},
  {path:'home/:username', component:HomeComponent, title:'Home with name', canActivate:[CanActivateGuard]},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'registro', component:RegistroComponent, title:'registro', canActivate:[CanActivateGuard], canDeactivate:[DeactivateGuard]},

  {path:'perfil/:name/:lastname/:email', component:ProfileComponent, title:'Perfil', canActivate:[CanActivateGuard]},
  {path:'perfil', component:ProfileComponent, title:'Perfil sin datos', canActivate:[CanActivateGuard]},

  {path:'**', component:NotFoundComponent, title: 'Pagina no encontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
