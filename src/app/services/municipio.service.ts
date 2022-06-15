import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // interfaz para hacer peticiones http
import { CarsL } from '../models/cars';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from "@angular/forms";
import { municipio } from '../models/municipio';
//import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class municipioService { // propiedad para la api
    API_mun = 'http://localhost:3000/municipio/listado';

    constructor(private http : HttpClient) {}


    // metodos para htpp
    getdmuni(){

        return this.http.get<municipio[]>(`${this.API_mun}`);
    }
    // metodo para obtener un unico vehiculo

    getmun(id : string): Observable<municipio[]> {
        const ret =  this.http.get<municipio[]>(`${this.API_mun}/${id}`);

        return ret;
    }
}