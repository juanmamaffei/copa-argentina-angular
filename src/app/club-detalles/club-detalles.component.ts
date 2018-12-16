import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../club';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClubService } from '../club.service';


@Component({
  selector: 'app-club-detalles',
  templateUrl: './club-detalles.component.html',
  styleUrls: ['./club-detalles.component.css']
})
export class ClubDetallesComponent implements OnInit {
  @Input() clubActivo: Club;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private clubServicio: ClubService
  ) { }

  ngOnInit() {
    this.abrirClub();
  }
  abrirClub(): void {
    // Obtener id de la URL por GET
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.clubServicio.obtenerClubconId(id).subscribe(id => this.clubActivo = id);

  }

}

