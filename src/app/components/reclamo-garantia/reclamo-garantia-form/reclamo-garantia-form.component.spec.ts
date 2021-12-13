import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoGarantiaFormComponent } from './reclamo-garantia-form.component';

describe('ReclamoGarantiaFormComponent', () => {
  let component: ReclamoGarantiaFormComponent;
  let fixture: ComponentFixture<ReclamoGarantiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamoGarantiaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoGarantiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
