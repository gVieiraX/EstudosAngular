import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "./lista/input/input.component";
import { ListViewComponent } from "./lista/list-view/list-view.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent, ListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ModulosAngular';
}
