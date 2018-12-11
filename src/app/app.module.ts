import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClubesComponent } from './clubes/clubes.component';
import { ClubDetallesComponent } from './club-detalles/club-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubesComponent,
    ClubDetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
