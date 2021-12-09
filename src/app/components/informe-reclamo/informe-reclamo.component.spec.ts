import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeReclamoComponent } from './informe-reclamo.component';

describe('InformeReclamoComponent', () => {
  let component: InformeReclamoComponent;
  let fixture: ComponentFixture<InformeReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeReclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
