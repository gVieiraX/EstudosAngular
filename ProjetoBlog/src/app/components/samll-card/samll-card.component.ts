import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-samll-card',
  imports: [RouterModule],
  templateUrl: './samll-card.component.html',
  styleUrl: './samll-card.component.css'
})
export class SamllCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  Id:string = ""
}
