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
  Poke_Indice: number = 0;
  
  NextPoke(){
    this.Poke_Indice = this.Poke_Indice + 1;
    this.LoadPoke();
  }

  LoadPoke(){
    
    this.pokeS.getPokemon(this.Poke_Indice).subscribe(
      {
        next : Poke => this.Poke = Poke
      }
    );
  }

  getName(){
    
    return this.Poke.name;
  
  }

 

}
