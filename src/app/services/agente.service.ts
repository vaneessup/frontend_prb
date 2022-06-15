import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // interfaz para hacer peticiones http
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from "@angular/forms";
import { agente } from '../models/agente_md';

@Injectable({providedIn: 'root'})
export class agenteService { // propiedad para la api
    API_agente = 'http://localhost:3000/agente/listado';

    constructor(private http : HttpClient) {}



    // metodos para htpp
    getAgentes(){

        return this.http.get<agente[]>(`${this.API_agente}`);
    }
    // metodo para obtener un unico vehiculo

    getAgente(id : string): Observable<agente> {

        return this.http.get<agente>(`${this.API_agente}${id}`);
    }

     // metodo para guardar
    saveAgente(agente: agente) {
        return this.http.post(`${this.API_agente}`, agente);

    }
}
