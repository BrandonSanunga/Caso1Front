import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth:AuthService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
      return this.auth.isAuthenticated$.pipe(tap(rps=>{
        if (rps) {
          //Swal.fire("Autorizado", "Se ha logeado correctamente!", "success");
          console.log("autorizado");
          
        } else {
          Swal.fire("Error", "Primero debe logearse!", "error");
          console.log("denegado");
          this.router.navigate(["catalogo"]);
        }
      }))
  }
  
}
