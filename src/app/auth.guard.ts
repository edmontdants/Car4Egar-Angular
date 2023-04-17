import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './Services/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private service: RegistrationService, private router: Router,private _snackBar: MatSnackBar ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree { //------------------------------------------------
    if (this.service.isloggedin()) {
      if (route.url.length > 0) {
        let menu = route.url[0].path;
        if (menu == 'SearchACar') {//Admin_Page
          if (this.service.getrole() =='Admin') {
            return true;
          } else {
            this.router.navigate(['']);
            this._snackBar.open("You Are Not Admin", 'Dismiss', {
              duration: 3000,
              panelClass: ['my-snackbar'],
            });
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    } else {
      this.router.navigate(['']);
      this._snackBar.open("You Must Login First", 'Dismiss', {
        duration: 3000,
        panelClass: ['my-snackbar'],
      });
      return false;
    }
  }
  //---------------------------------------------------
}
