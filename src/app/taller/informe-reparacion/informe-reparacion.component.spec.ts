import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeReparacionComponent } from './informe-reparacion.component';

describe('InformeReparacionComponent', () => {
  let component: InformeReparacionComponent;
  let fixture: ComponentFixture<InformeReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
