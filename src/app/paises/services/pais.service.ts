import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  buscarPais(txt: string) {
    const path = `${this.apiUrl}/name/${txt}`;
    return this.http.get<any[]>(path);
  }

}
