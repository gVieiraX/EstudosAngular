import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [],
  exports:[CardComponent],
  imports: [
    CardComponent,
    CommonModule
  ]
})
export class PortfolioModule { }
