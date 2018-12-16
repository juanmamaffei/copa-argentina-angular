import { Component, OnInit } from '@angular/core';

import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {
  clubes = Club[''];

  clubActivo: Club;
  onSelect(club: Club): void { this.clubActivo = club; }


  constructor(private clubServicio: ClubService) {}

  ngOnInit() {
    this.obtenerClubes();
  }

  obtenerClubes(): void {
    this.clubServicio.obtenerClubes().subscribe(clubes => this.clubes = clubes);

    // this.clubes = this.clubServicio.obtenerClubes();
  }

}
