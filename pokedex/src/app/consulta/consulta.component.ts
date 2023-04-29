import { Component, OnInit } from '@angular/core';
import { poke } from '../poke';
import { PokeService } from '../pokee.service';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit{
  ngOnInit(): void {
    
  }

  LoadDog(){
    this.PokeService.getRandomDog().subscribe(
      {
        next : poke => this.dog = dog
      }
    );
  }


}
