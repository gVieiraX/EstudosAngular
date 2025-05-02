import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string ="https://i.pinimg.com/564x/b7/bd/39/b7bd39d132f780e91bec3ab2d9096781.jpg"
  contentTitle:string ="Menino Neymar"
  contentDescription:string ="Esse é o Menino Ney em 2011"
}
