import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestoAgregadoComponent } from './repuesto-agregado.component';

describe('RepuestoAgregadoComponent', () => {
  let component: RepuestoAgregadoComponent;
  let fixture: ComponentFixture<RepuestoAgregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestoAgregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoAgregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
