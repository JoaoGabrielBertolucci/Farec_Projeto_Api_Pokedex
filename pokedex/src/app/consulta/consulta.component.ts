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
  Poke_Indice: number = 1;
  poke_number_str: string = "001";
  
  Poke_img: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.poke_number_str + ".png"; 

  pokeNumberToString(){
    if(this.Poke_Indice >= 10 && this.Poke_Indice < 100){
      this.poke_number_str = "0" + this.Poke_Indice;
    }
    
    else if(this.Poke_Indice >= 100){
      this.poke_number_str = this.Poke_Indice.toString();
    }
    else{
      this.poke_number_str = "00" + this.Poke_Indice;
    }
    
  }

  NextPoke(){
    this.Poke_Indice = this.Poke_Indice + 1;
    this.pokeNumberToString();
    this.LoadPoke();
    this.Poke_img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.poke_number_str + ".png";

  }

  PrevPoke(){
    this.Poke_Indice = this.Poke_Indice - 1;
    this.pokeNumberToString();
    this.LoadPoke();
    this.Poke_img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.poke_number_str + ".png";
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
