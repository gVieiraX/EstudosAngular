import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produtos:string[] = []
  menuType:string = "admin"

  constructor(){
    this.produtos = [
      "mouse",
      "teclado"
    ]
  }

  Adicionar(){
    this.produtos.push("Gabriel","Vieira")
  }


}
