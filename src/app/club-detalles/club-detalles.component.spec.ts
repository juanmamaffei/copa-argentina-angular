import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDetallesComponent } from './club-detalles.component';

describe('ClubDetallesComponent', () => {
  let component: ClubDetallesComponent;
  let fixture: ComponentFixture<ClubDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
