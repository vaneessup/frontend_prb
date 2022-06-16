import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../../services/cars.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import {MatDialog, } from '@angular/material/dialog';
import {dptoService} from '../../../services/dpto.service';
import {depto} from 'src/app/models/dpto';
import {municipio} from '../../../models/municipio';
import {CarsL} from '../../../models/cars';
import {municipioService} from 'src/app/services/municipio.service';
import {Router, ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {clienteService} from "../../../services/cliente.service";
import { clientes } from '../../../models/clientesmd';
import  {MatSnackBar} from '@angular/material/snack-bar';


@Component({
    selector: 'app-cotizar',
    templateUrl: './cotizar.component.html',
    styleUrls: [
        "./cotizar.component.css"
    ]
})

export class CotizarComponent implements OnInit {
    

    departamentos: depto[] = []
    municipios: municipio[] = []
    vehiculos: CarsL[] = []

    formulario: FormGroup = this.formb.group({

        Nombre: [ ''],
        Apellido: [ ''],
        Telefono: [ ''],
        Correo: [ ''],
        Edad: [ ''],
        Genero: [ ''],
        tb_departamento_idDepartamento: [ ''],
        tb_municipio_idMunicipio: [ ''],
        tb_vehiculo_idVehiculo: [ ''],
        
    })

    constructor(private formb: FormBuilder,private dptoService: dptoService, private dial: MatDialog,
                private municipioService: municipioService, private router: Router, private activatedRoute: ActivatedRoute,
                private carsService: CarsService,
                private clienteService: clienteService, private snackBar: MatSnackBar

    ) {
    }

    ngOnInit(): void {

        this.activatedRoute.params
            .pipe(
                switchMap(({id}) => this.municipioService.getmun(id))
            )

        this.dptoService.getdptos()
            .subscribe(departamentos => this.departamentos = departamentos)

        this.carsService.getCars()
            .subscribe(tb_vehiculo_idVehiculo => this.vehiculos = tb_vehiculo_idVehiculo)
        
    }

    onChange(value: string) {
        this.municipioService.getmun(value)
            .subscribe(municipios => {

                console.log(municipios);
                this.municipios = municipios
            })
    }

    Salir() {
        this.dial.closeAll();
        this.router.navigate(['/cars']);
    }

    save(clien: clientes){
        this.clienteService.saveCliente(this.formulario.value).subscribe(
            result =>{
                    console.log(result);
            }, error =>{
                console.log(error);
            }
        )
    }
    //guardar
    cotizar() {
        console.log(this.formulario.value);
        //console.log("hola");
        this.save(this.formulario.value);
        this.formulario.reset()
    }

    openSnackBar(message: any, action: any){
        this.snackBar.open(message, action);
    }

}
