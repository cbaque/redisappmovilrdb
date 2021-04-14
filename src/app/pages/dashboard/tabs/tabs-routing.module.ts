import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ResolverService } from 'src/app/services/resolver.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TabsPage,
    children: [
      {
        path: 'grafico',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'reciclar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: ':id',
            resolve: {
              special: ResolverService
            },
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'pedir',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pedir-direccion/pedir-direccion.module').then(m => m.PedirDireccionPageModule)
          },
          {
            path: ':id',
            resolve: {
              special: ResolverService
            },
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/dashboard/grafico',
        pathMatch: 'full'
      }
    ],
    runGuardsAndResolvers: 'always',
  },
  {
    path: '',
    redirectTo: '/dashboard/grafico',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
