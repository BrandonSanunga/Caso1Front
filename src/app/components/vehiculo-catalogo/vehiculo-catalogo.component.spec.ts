import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCatalogoComponent } from './vehiculo-catalogo.component';

describe('VehiculoCatalogoComponent', () => {
  let component: VehiculoCatalogoComponent;
  let fixture: ComponentFixture<VehiculoCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
