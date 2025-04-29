import { Component, Input, OnInit,OnChanges, SimpleChanges, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  @Input() name:string = "Mundo!"

  constructor() {
    console.log(`Construtor ${this.name}`)
   }

   ngOnChanges(): void{
    console.log(`OnChanges ${this.name}`)
   }

  ngOnInit(): void {
    this.name = this.name +  "x"
    console.log(`OnInit ${this.name}`)
  }
}
