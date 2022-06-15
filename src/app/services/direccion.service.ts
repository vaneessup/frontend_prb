import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // interfaz para hacer peticiones http
import { CarsL } from '../models/cars';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from "@angular/forms";
//import {Observable} from 'rxjs';
import { direccion } from '../models/direccion';


@Injectable({providedIn: 'root'})
export class direService { // propiedad para la api
    API_dire = 'http://localhost:3000/dire';

    constructor(private http : HttpClient) {}

   
    // metodos para htpp
    getdirs(){

        return this.http.get<direccion[]>(`${this.API_dire}/listado`);
    }
    // metodo para obtener un unico vehiculo

    getdir(id : string): Observable<direccion> {

        return this.http.get<direccion>(`${this.API_dire}/listado${id}`);
    }

    dirSave(dir: direccion) {
        return this.http.post(`${this.API_dire}`, dir);

    }

}