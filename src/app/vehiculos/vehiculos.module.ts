import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import { ListadoComponent }from './pages/listado/listado.component';
import {HomeComponent}from './pages/home/home.component';


@NgModule({ 
    declarations: [  
        ListadoComponent,
        CotizarComponent,
        HomeComponent
    ], 
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        VehiculosRoutingModule
        
    ]

}) export class VehiculosModule {}
