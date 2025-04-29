import { Component,OnInit,DoCheck, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements 

OnInit,DoCheck, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {

quantidade:number = 0

constructor () {}

   add(){
    this.quantidade= this.quantidade += 1
  }

  remove(){
    this.quantidade= this.quantidade -= 1
  }

      //checked -> content -> view

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //após alguma alteração verifica o conteúdo
  ngAfterContentChecked(): void {
     console.log('ngAfterContentChecked');
  }

  //quando o conteúdo é iniciado
  ngAfterContentInit(): void {
     console.log('ngAfterContentInit');
  }

  //após alguma alteração verifica a view
  ngAfterViewChecked(): void {
     console.log('ngAfterViewChecked');
  }

  //depois da inicialização da view
  ngAfterViewInit(): void {
     console.log('ngAfterViewInit');
  }
  
  ngOnDestroy(): void {
    console.log('Good By Destroy');
  }

}
