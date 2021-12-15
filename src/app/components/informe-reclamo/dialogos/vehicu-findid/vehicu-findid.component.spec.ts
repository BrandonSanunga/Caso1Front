import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicuFindidComponent } from './vehicu-findid.component';

describe('VehicuFindidComponent', () => {
  let component: VehicuFindidComponent;
  let fixture: ComponentFixture<VehicuFindidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicuFindidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicuFindidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
