import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  // @Input() contador!:number;
  // @Output() cambioContador: EventEmitter<number> = new EventEmitter<number>;

  contador!: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  reset() {
    // this.contador = 0;
    // this.cambioContador.emit(this.contador);

    this.store.dispatch(reset());
  }

}
