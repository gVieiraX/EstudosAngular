import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPriceComponent } from './card-price/card-price.component';

@Component({
  selector: 'app-card',
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  gameLable: string = ""
  @Input()
  gameCover: string = ""
  @Input()
  gameType: string = "Digital PS4"
  @Input()
  gamePricing: string = "R$400,00"

}
