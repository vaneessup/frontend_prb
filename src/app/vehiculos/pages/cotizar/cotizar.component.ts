import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { dptoService } from '../../../services/dpto.service';
import { depto } from 'src/app/models/dpto';
import { municipio } from '../../../models/municipio';
import { municipioService } from 'src/app/services/municipio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: [
    "./cotizar.component.css"
  ]
})
export class CotizarComponent implements OnInit {
  
  

  departamento: depto[] = []
  municipio: municipio[] = []

  constructor(private dptoService: dptoService, private dial: MatDialog, 
    private municipioService: municipioService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.municipioService.getmun(id) )
      )

    this.dptoService.getdptos()
    .subscribe(departamento => this.departamento = departamento)
  }

  Salir(){


    this.dial.closeAll();
    this.router.navigate(['/listado']);

}
cotizar(){

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.width = "40%";
  dialogConfig.height = "60%"
  this.dial.open(CotizarComponent, dialogConfig);
}



}
