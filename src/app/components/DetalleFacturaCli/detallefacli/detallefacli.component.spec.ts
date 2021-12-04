import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallefacliComponent } from './detallefacli.component';

describe('DetallefacliComponent', () => {
  let component: DetallefacliComponent;
  let fixture: ComponentFixture<DetallefacliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallefacliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallefacliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
