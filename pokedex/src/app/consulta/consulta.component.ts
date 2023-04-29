import { Component, OnInit } from '@angular/core';
import { poke } from '../poke';
import { PokeService } from '../pokee.service';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit{
  constructor(private pokeS: PokeService){}
  
  ngOnInit(): void {
    this.LoadPoke();
  }
  Poke:  poke = {} as poke;
  LoadPoke(){
    
    this.pokeS.getPokemon().subscribe(
      {
        next : Poke => this.Poke = Poke
      }
    );
  }


}
