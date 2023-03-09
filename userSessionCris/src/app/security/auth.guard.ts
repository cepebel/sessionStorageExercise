/*import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { LogInService } from '../log-in.service';

class Permissions{
    canActivate(): Boolean{
        return true;
    }
}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(logInService: LogInService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
        
        this.LogInService.authInfo$.map(authInfo =>authInfo.isLoggedIn())
        .take(1)
        .do(allowed => {
            if(!allowed){
                this.router.navigate(['/log-in'])
            }
        });
        return undefined;
    }

}*/