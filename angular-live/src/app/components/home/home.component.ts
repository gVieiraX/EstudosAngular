import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormServie = inject(EnviaFormService)
  name: string = "Gabriel"
  idButton = 1
  devMostrar = false;

  meuBooleano = false;

  atualizaBooleano(valor: boolean) {
    this.meuBooleano = valor;
  }

  @Input() minhaPropsOut!:string;

  @Output() emitindoValorName = new EventEmitter<string>();

  submit() {
    this.emitindoValorName.emit(this.name);
    this.enviaFormServie.enviaInfoBackend("ENVIANDO PARA O BACKEND")
  }

  listItems = ["acxca", "wfwf", "cwfwf"]
  listItems2 = [{ id: "1" }, { id: "2" }, { id: "3" }]

 

}
