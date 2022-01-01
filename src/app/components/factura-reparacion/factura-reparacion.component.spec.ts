import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaReparacionComponent } from './factura-reparacion.component';

describe('FacturaReparacionComponent', () => {
  let component: FacturaReparacionComponent;
  let fixture: ComponentFixture<FacturaReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
