import { Component,OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { error } from 'console';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  name:string = "Pikachu"
  attributesTypes:string[] =  ['FIRE','ROCK','WIND']

  constructor(private service:PokemonServiceService){
  }

  ngOnInit():void{
    this.service.getPokemon("Pikachu").subscribe({
      next:(res) => console.log(res),
      error:(err) => console.log(err)
    })
  }
}
