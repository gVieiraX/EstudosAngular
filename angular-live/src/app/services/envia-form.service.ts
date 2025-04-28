import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }

  enviaInfoBackend(info:string){
    console.log("Enviando para o backend")
  }

}
