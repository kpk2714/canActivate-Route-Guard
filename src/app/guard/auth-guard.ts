import { Router } from "@angular/router";
import { AuthService } from "../Service/auth.service";
import { inject } from "@angular/core";

export const canActivate = () => {

    const authService : AuthService = inject(AuthService);
    const router : Router = inject(Router);

    if(authService.isAuthenticated()) {
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
}