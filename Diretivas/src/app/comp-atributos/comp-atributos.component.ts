import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-comp-atributos',
  imports: [CommonModule,FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {
  estilo:string  ="enable"
  corFundo:string = "red"
  corFonte:string = "white"
  item:string =""
  lista:string[] = []
  isEnableBlock:boolean = true


  trocar(){
    if(this.estilo === "disable"){
        this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

  adicionarLista(){
    this.lista.push(this.item)
  }
  
}
