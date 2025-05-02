import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-samll-card',
  imports: [],
  templateUrl: './samll-card.component.html',
  styleUrl: './samll-card.component.css'
})
export class SamllCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
}
