import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { CLUBES } from '../plantilla-clubes';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {
  clubes = CLUBES;
  clubActivo: Club;
  onSelect(club: Club): void { this.clubActivo = club; }
  constructor() { }

  ngOnInit() {
  }

}
