import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { poke } from './poke';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  constructor(private http : HttpClient) { }

  getPokemon(id: number) : Observable<poke>{
    return this.http.get<poke>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}
