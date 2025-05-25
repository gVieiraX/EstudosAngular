import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  imports: [],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent {

@Input()
gameType:string = "Digital PS4"
@Input()
gamePricing:string = "R$400,00"
}
