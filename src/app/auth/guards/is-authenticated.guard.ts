import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

//  const url= state.url;
//  localStorage.setItem('url',url);
  const authServide = inject(AuthService);
  const router      = inject(Router);


  if(authServide.authStatus() === AuthStatus.authenticated){
    return true;
  }

  // if(authServide.authStatus() === AuthStatus.checking){
  //   return false;
  // }

  router.navigateByUrl('/auth/login');
  return false;

};
