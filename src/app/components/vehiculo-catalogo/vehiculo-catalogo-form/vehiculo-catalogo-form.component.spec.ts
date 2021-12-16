import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCatalogoFormComponent } from './vehiculo-catalogo-form.component';

describe('VehiculoCatalogoFormComponent', () => {
  let component: VehiculoCatalogoFormComponent;
  let fixture: ComponentFixture<VehiculoCatalogoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoCatalogoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCatalogoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
