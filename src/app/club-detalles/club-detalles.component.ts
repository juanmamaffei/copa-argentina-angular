import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../club';

@Component({
  selector: 'app-club-detalles',
  templateUrl: './club-detalles.component.html',
  styleUrls: ['./club-detalles.component.css']
})
export class ClubDetallesComponent implements OnInit {
  @Input() clubActivo: Club;
  constructor() { }

  ngOnInit() {

  }

}

