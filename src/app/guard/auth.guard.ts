import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of, map } from 'rxjs';
import { TokenService } from '../service/token.service';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('guard working');
    // this.tokenService.getObseverForAuthGuard().subscribe({
    //   error: (val: boolean) => {
    //     this.route.navigateByUrl('/auth/login');
    //   },
    // });
    //return this.tokenService.getObseverForAuthGuard();
    return of(true);
  }
}
