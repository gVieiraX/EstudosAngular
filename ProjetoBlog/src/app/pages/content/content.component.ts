import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../datas/data.fake';


@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string ="https://i.pinimg.com/564x/b7/bd/39/b7bd39d132f780e91bec3ab2d9096781.jpg"
  contentTitle:string ="Menino Neymar"
  contentDescription:string ="Esse é o Menino Ney em 2011"
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}