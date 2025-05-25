import { Component,OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonData } from '../../models/pokemonData';
import { CommonModule } from '@angular/common';
import { TransformadorPipe } from '../../Pipes/transformador.pipe';

@Component({
  selector: 'app-card',
  imports: [CommonModule,TransformadorPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = {
    id:0,
    name:'',
    sprites:{front_default:''},
    types: []
  }

  constructor(
    private service:PokemonServiceService
  ) {

    this.pokemon = {
      id:0, name:'',
      sprites:{
        front_default: ''
      },types:[]
    }

  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log('not found')
      }
    )
  }

}
