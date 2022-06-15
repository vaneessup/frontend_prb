import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { CarsL } from '../../../models/cars';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { VehiculoComponent } from '../vehiculo/vehiculo.component';
import { CotizarComponent } from '../cotizar/cotizar.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: [
    "./list.component.css"
  ]
})
export class ListadoComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['idVehiculo', 'Marca', 'Modelo', 'Tipo', 'Precio'];
  //dataSource = new MatTableDataSource<vehiculos>(ELEMENT_DATA);
  clickedRows = new Set<any>();
  vehic: CarsL[] = [];

  constructor(private CarsService: CarsService,
    private dialog: MatDialog) { }

  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
   this.CarsService.getCars()
   .subscribe(vehic => this.vehic = vehic);
  }
  
  onCreate(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = "45%";
        dialogConfig.height = "80%"
        this.dialog.open(CotizarComponent, dialogConfig);
  }
}
