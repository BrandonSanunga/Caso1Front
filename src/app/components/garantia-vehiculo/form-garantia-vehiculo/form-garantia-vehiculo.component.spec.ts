import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGarantiaVehiculoComponent } from './form-garantia-vehiculo.component';

describe('FormGarantiaVehiculoComponent', () => {
  let component: FormGarantiaVehiculoComponent;
  let fixture: ComponentFixture<FormGarantiaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGarantiaVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGarantiaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
