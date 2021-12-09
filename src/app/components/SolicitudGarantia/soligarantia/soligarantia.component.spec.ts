import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoligarantiaComponent } from './soligarantia.component';

describe('SoligarantiaComponent', () => {
  let component: SoligarantiaComponent;
  let fixture: ComponentFixture<SoligarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoligarantiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoligarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
