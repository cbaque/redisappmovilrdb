import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './theme/layout/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'signin',
        loadChildren: () => import('./pages/authentication/auth-signin/auth-signin.module').then(module => module.AuthSigninModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'consumidor',
        loadChildren: () => import('./theme/layout/consumidor/consumidor.module').then(m => m.ConsumidorModule)
      },
      {
        path: 'reciclador',
        loadChildren: () => import('./theme/layout/reciclador/reciclador.module').then(m => m.RecicladorModule)
      },
      {
        path: 'recuperador',
        loadChildren: () => import('./theme/layout/recuperador/recuperador.module').then(m => m.RecuperadorModule)
      }
    ]
  },
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/tabs/tabs.module').then(m => m.TabsPageModule),
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
