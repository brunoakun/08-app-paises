import { UtilidadesService } from './../../shared/utilidades.service';
import { IPais } from './../interfaces/pais';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public error: boolean = false;
  public cargando: boolean = false;
  public buscarPor: string = '';
  public paises: IPais[] = [];

  private path: string = '';

  constructor(
    private http: HttpClient,
    private srvUtil: UtilidadesService) {
  }

  buscarPaises(txt: string) {
    // Devuelve un array de objetos <pais>
    if (this.buscarPor == 'pais') this.path = `${this.apiUrl}/name/`;
    if (this.buscarPor == 'region') this.path = `${this.apiUrl}/region/`;
    if (this.buscarPor == 'capital') this.path = `${this.apiUrl}/capital/`;

    return this.http.get<IPais[]>(this.path + txt);
  }


  buscarPaisPorCod(cod: string) {
    // Devulve un solo objeto <país>
    return this.http.get<any>(`${this.apiUrl}/alpha/${cod}`);
  }

  paisesPorPoblacion() {
    return this.paises.sort((a, b) => (a.population > b.population) ? -1 : 1);
  }

}
