import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

interface Desactivar {
  SalirDeRuta: () => Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(component: Desactivar) {
    return component.SalirDeRuta ? component.SalirDeRuta() : true;
  }
  

}
