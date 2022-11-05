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

}
