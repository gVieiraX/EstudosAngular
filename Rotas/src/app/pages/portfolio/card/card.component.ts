import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private activeRoute: ActivatedRoute, 
    private navegador: Router
  ){

    //http://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe(res => console.log(res))

    this.activeRoute.firstChild?.params.subscribe(res => console.log(res))

    //http://localhost:4200/portfolio/1?{name=gabriel&token=123}
    this.activeRoute.queryParamMap.subscribe(res => console.log(res))
  }

  ngOnInit():void{
      setInterval(() => {
        this.navegador.navigate(['/'])
      }, 5000);
  }

}
