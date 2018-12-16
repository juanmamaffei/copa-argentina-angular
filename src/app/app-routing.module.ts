import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubesComponent } from './clubes/clubes.component';
import { ClubDetallesComponent } from './club-detalles/club-detalles.component';

const routes: Routes = [
  {path: 'clubes', component: ClubesComponent},
  {path: 'club/:id', component: ClubDetallesComponent},
  {path: '', redirectTo: '/clubes', pathMatch: 'full' },
  {path: '**', redirectTo: '/clubes', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
