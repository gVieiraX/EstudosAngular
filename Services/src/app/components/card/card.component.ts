import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  name:string = "Pikachu"
  attributesTypes:string[] =  ['FIRE','ROCK','WIND']
}
