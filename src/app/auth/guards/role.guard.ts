import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChildFn } from "@angular/router";
import { map, catchError, of } from "rxjs";
import { AuthorizationService } from "../services/authorization.service";
  
export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthorizationService);
  const router = inject(Router);

  return authService.userHasAccess(route?.routeConfig?.path).pipe(
    map((res) => {
     return res;
    }),
    catchError(() => {
      router.navigate(['route-to-fallback-page']);
      return of(false);
    })
  );
};

export const RoleGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);