import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoVehiculoComponent } from './diseno-vehiculo.component';

describe('DisenoVehiculoComponent', () => {
  let component: DisenoVehiculoComponent;
  let fixture: ComponentFixture<DisenoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
