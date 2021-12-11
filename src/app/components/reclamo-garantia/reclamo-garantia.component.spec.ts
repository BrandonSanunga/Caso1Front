import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoGarantiaComponent } from './reclamo-garantia.component';

describe('ReclamoGarantiaComponent', () => {
  let component: ReclamoGarantiaComponent;
  let fixture: ComponentFixture<ReclamoGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamoGarantiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
