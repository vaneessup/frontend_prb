import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListadoComponent } from '../vehiculos/pages/listado/listado.component';
import { CotizarComponent } from '../vehiculos/pages/cotizar/cotizar.component';
import { VehiculoComponent } from '../vehiculos/pages/vehiculo/vehiculo.component';

const routes: Routes = [
  {
    path:'',
    //rutas hijas
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'cars/listado',
        component: ListadoComponent
      },
      {
        path: 'cars/cotizar',
        component: CotizarComponent
      },
      {
        path: ':id',
        component: VehiculoComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
