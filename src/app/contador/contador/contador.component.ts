import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola Mundo</h1>
        <h2>{{title}}</h2>
        
        <h3>La base es: <strong>{{base}}</strong></h3>
        
        <button (click)="acumular(+base)">+ {{base}}</button>
        <span>{{number}}</span>   
        <button (click)="acumular(-base);">- {{base}}</button>

    `
})

export class contadorComponent{
    title: string = 'Contador App';
    number: number =5;
    base: number =5;

    acumular (valor:number){
        this. number+=valor;
          }
}