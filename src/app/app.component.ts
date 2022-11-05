import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { decrementar, incrementar } from './contador/contador.actions';
import * as actions from './contador/contador.actions';

// Definir la interfaz de como luce el estado
interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador: number;

  // Inyectar el Store a este componente
  constructor(private store: Store<AppState>) {
    this.contador = 10;
  }

  ngOnInit(): void {
    // Suscripción al store para estar atentos cuando cambie el estado
    /*this.store.subscribe(state => {
      console.log(state);
      // Actualizar el estado interno del componente, con base al estado globla de la aplicación
      this.contador = state.contador;
    })*/

    // Es estado puede ser un objeto complejo, por tanto podemos observar el cambio de algun path en el estado y reaccionar ante ello
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    // this.contador += 1;
    // Despachar la acción para incrementar el valor del contador
    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    // this.contador -= 1;
    this.store.dispatch(actions.decrementar());
  }

  actualizarContador(newValue: number) {
    // actualizar el contador al valor emitido por el componente hijo
    this.contador = newValue;
  }
}
