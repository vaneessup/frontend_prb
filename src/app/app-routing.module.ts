import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule)
  },
  {
    path: 'cars/listado',
    loadChildren: () => import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule)
  },
  {
    path: 'cars/cotizar',
    loadChildren: () => import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: 'cars/listado'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
