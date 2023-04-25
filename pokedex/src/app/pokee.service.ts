import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { poke } from './poke';

@Injectable({
  providedIn: 'root'
})
export class PokeeService {
  constructor(private http : HttpClient) { }

  getRandomDog() : Observable<poke>{
    return this.http.get<poke>("https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png");
  }

}
