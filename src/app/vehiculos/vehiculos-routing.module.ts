import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';

const routs: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {path: 'listado', component: ListadoComponent},
        {path: 'cliente', component:CotizarComponent},
        {path: ':idVehiculo', component: VehiculoComponent},
        {path: '**',redirectTo: 'listado'},
        ]
    }
];



@NgModule({
  imports: [
    RouterModule.forChild(routs)
  ],
  exports: [
    RouterModule
  ]
})
export class VehiculosRoutingModule { }
