import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
            return undefined;
        }

}