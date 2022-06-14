import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CarsService } from '../../../services/cars.service';
import { CarsL } from '../../../models/cars';
import { MatToolbar } from '@angular/material/toolbar';
@Component({
    selector: 'app-vehiculo',
    templateUrl: './vehiculo.component.html',
    
  })

export class VehiculoComponent {
    vehic: CarsL[] = [];
 
    constructor(private CarsService: CarsService) { }
  
    ngAfterViewInit() {
     // this.dataSource.paginator = this.paginator;
    }
  
    ngOnInit(): void {
     this.CarsService.getCars()
     .subscribe(vehic => this.vehic = vehic);
    }
}