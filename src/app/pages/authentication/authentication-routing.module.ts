import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      // {
      //   path: 'signup',
      //   loadChildren: () => import('./auth-signup/auth-signup.module').then(module => module.AuthSignupModule)
      // },
      {
        path: 'signin',
        loadChildren: () => import('./auth-signin/auth-signin.module').then(module => module.AuthSigninModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./auth-signin-go/auth-signin-go.module').then( m => m.AuthSigninGoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
