// servicios
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // interfaz para hacer peticiones http
import { CarsL } from '../models/cars';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from "@angular/forms";
//import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CarsService { // propiedad para la api
    API_Car = 'http://localhost:3000/cars';

    constructor(private http : HttpClient) {}

   

    // metodos para htpp
    getCars(){

        return this.http.get<CarsL[]>(`${this.API_Car}/listado`);
    }
    // metodo para obtener un unico vehiculo

    getCar(id : string): Observable<CarsL> {

        return this.http.get<CarsL>(`${this.API_Car}/listado${id}`);
    }
    // metodo para guardar
    saveCar(car : CarsL) {
        return this.http.post(`${this.API_Car}`, car);

    }
    // eliminar
    deleteCar(id : string) {
        return this.http.delete(`${this.API_Car}/${id}`);

    }
    // actualizar
    updateCar(id : string, updatedCar : CarsL) {

        return this.http.put<CarsL>(`${this.API_Car}/${id}`, updatedCar);
    }


}
