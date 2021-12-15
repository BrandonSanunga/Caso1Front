import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaComVeDialogComponent } from './factura-com-ve-dialog.component';

describe('FacturaComVeDialogComponent', () => {
  let component: FacturaComVeDialogComponent;
  let fixture: ComponentFixture<FacturaComVeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaComVeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaComVeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
