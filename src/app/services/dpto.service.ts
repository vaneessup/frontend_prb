import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // interfaz para hacer peticiones http
import { CarsL } from '../models/cars';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from "@angular/forms";
//import {Observable} from 'rxjs';
import { depto } from '../models/dpto';

@Injectable({providedIn: 'root'})
export class dptoService { // propiedad para la api
    API_dpto = 'http://localhost:3000/dpto/listado';

    constructor(private http : HttpClient) {}

   

    // metodos para htpp
    getdptos(){

        return this.http.get<depto[]>(`${this.API_dpto}`);
    }
    // metodo para obtener un unico vehiculo

    getdpto(id : string): Observable<depto> {

        return this.http.get<depto>(`${this.API_dpto}/listado${id}`);
    }

}