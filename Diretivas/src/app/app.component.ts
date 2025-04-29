import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent,CompAtributosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Diretivas';
  isAliveCard = true;
}
