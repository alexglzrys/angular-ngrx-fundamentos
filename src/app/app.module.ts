import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

// 3. Importar el módulo del Store y el reducer
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador: contadorReducer}),
    // Instalar Store DevTools para inspeccionar como se comporta el estado de la aplicación mediante Redux DevTools
    // 1. ng add @ngrx/store-devtools@latest
    // 2. instalar extensión en el navegador
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
