import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador!:number;
  @Output() cambioContador:EventEmitter<number> = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar() {
    this.contador *=10
    // Notificar al padre del nuevo valor de contador
    this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  reset(nuevoValor: number) {
    this.contador = nuevoValor;
    // Notificar al componente padre el nuevo valor que tomará el contador tras el reseteo emitido por el nieto.
    // ? Esta burbuja de emiir eventos hacia arriba se puede reemplazar por un servicio, donde se tenga definido el valor base y los métodos para alterar dicho valor
    // * Otra forma cuando la aplicación es muy compleja es hacer uso del patró REDUX
    this.cambioContador.emit(this.contador)
  }

}
