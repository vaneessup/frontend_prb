import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // interfaz para hacer peticiones http
import { CarsL } from '../models/cars';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from "@angular/forms";
import { clientes } from '../models/clientesmd';
//import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class clienteService { // propiedad para la api
    API_client = 'http://localhost:3000/cliente';

    constructor(private http : HttpClient) {}

   

    // metodos para htpp
    getclientes(){

        return this.http.get<clientes[]>(`${this.API_client}/listado`);
    }
    // metodo para obtener un unico vehiculo

    getcliente(id : string): Observable<clientes> {

        return this.http.get<clientes>(`${this.API_client}/listado${id}`);
    }

        // metodo para guardar//insert
        saveCliente(datos: clientes) {
            let headers = new HttpHeaders().set('Content-type', 'application/json;charset=UTF-8');
            return this.http.post(`${this.API_client}`, datos, { headers });
          }
    /*saveCliente(client: clientes):Observable<clientes> {
        return this.http.post<clientes>(`${this.API_client}`, client);

    }*/
}