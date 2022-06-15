import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../../services/cars.service';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormArray} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {dptoService} from '../../../services/dpto.service';
import {depto} from 'src/app/models/dpto';
import {municipio} from '../../../models/municipio';
import {CarsL} from '../../../models/cars';
import {municipioService} from 'src/app/services/municipio.service';
import {Router, ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {agenteService} from "../../../services/agente.service";
import {clienteService} from "../../../services/cliente.service";
import { clientes } from '../../../models/clientesmd';


@Component({
    selector: 'app-cotizar',
    templateUrl: './cotizar.component.html',
    styleUrls: [
        "./cotizar.component.css"
    ]
})

export class CotizarComponent implements OnInit {
    
    cotizarForm = new FormGroup({
        Nombre: new FormControl(''),
        Apellido: new FormControl(''),
        Telefono: new FormControl(''),
        Correo: new FormControl(''),
        Edad: new FormControl(''),
        Genero: new FormControl(''),
        tb_departamento_idDepartamento: new FormControl(''),
        tb_Municipio_idMunicipio: new FormControl(''),
        Vehiculo: new FormControl,
    })

    departamentos: depto[] = []
    municipios: municipio[] = []
    vehiculos: CarsL[] = []

    valores: clientes = {
    Nombre: '',
    Apellido: '',
    Telefono: 0,
    Correo: '',
    Edad: 0,
    Genero: '',
    tb_departamento_idDepartamento: 0,
    tb_municipio_idMunicipio: 0,
    tb_vehiculo_idVehiculo: 0
}

    constructor(private dptoService: dptoService, private dial: MatDialog,
                private municipioService: municipioService, private router: Router, private activatedRoute: ActivatedRoute,
                private carsService: CarsService,
                private clienteService: clienteService

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
            .subscribe(vehiculos => this.vehiculos = vehiculos)

        
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
        this.clienteService.saveCliente(this.cotizarForm.value).subscribe(
            result =>{
                    console.log(result);
            }, error =>{
                console.log(error);
            }
        )
    }
    //guardar
    cotizar(cotizarForm: any) {
        console.log(cotizarForm);
        console.log("hola");
        this.save(cotizarForm);
    }

}
