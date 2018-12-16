// Importaciones de Javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClubesComponent } from './clubes/clubes.component';
import { ClubDetallesComponent } from './club-detalles/club-detalles.component';

@NgModule({
  declarations: [
    /* Los componentes, directivas y pipes que pertenecen a este módulo.
     Se declaran SÓLO en un módulo.*/
    AppComponent,
    ClubesComponent,
    ClubDetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [], // Un array con los servicios que la app necesita
  bootstrap: [AppComponent]
})
export class AppModule { }
