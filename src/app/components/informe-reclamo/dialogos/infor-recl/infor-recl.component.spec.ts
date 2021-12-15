import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforReclComponent } from './infor-recl.component';

describe('InforReclComponent', () => {
  let component: InforReclComponent;
  let fixture: ComponentFixture<InforReclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforReclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforReclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
