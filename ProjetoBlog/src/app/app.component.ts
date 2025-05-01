import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCardComponent } from "./components/big-card/big-card.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { SamllCardComponent } from "./components/samll-card/samll-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BigCardComponent, MenuBarComponent, MenuTitleComponent, SamllCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoBlog';
}
