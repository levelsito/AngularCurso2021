import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interface/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiEndpoint: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiEndpoint}/heroes`);
  }

  getHeroesPorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.apiEndpoint}/heroes/${ id }`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiEndpoint}/heroes/?q=${ termino }&_limit=6`);
  }

  agregarHeroe( heroe: Heroe ): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.apiEndpoint}/heroes`, heroe);
  }

  actualizarHeroe( heroe: Heroe ): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.apiEndpoint}/heroes/${ heroe.id }`, heroe);
  }

  borrarHeroe( id: string ): Observable<any>{
    return this.http.delete<any>(`${this.apiEndpoint}/heroes/${ id }`);
  }
}
