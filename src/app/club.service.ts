import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Club } from './club';
import { CLUBES } from './plantilla-clubes';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor() { }

  obtenerClubes(): Observable<Club[]> {
    return of(CLUBES);

  }


}
