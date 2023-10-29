import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

//  const url= state.url;
//  localStorage.setItem('url',url);
  const authServide = inject(AuthService);
  const router      = inject(Router);


  if(authServide.authStatus() === AuthStatus.authenticated){
    router.navigateByUrl('/dashboard');
    return false;
  }
  return true;

};
