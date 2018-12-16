import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Club } from './club';
import { CLUBES } from './plantilla-clubes';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor() { }
  club: Club;
  obtenerClubes(): Observable<Club[]> {

    return of(CLUBES);

  }
  obtenerClubconId(id: number): Observable<Club> {
    return of(CLUBES.find(club => club.id === id));
  }

}
