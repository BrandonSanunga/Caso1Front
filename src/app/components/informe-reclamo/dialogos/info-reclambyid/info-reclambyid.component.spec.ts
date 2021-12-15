import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReclambyidComponent } from './info-reclambyid.component';

describe('InfoReclambyidComponent', () => {
  let component: InfoReclambyidComponent;
  let fixture: ComponentFixture<InfoReclambyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReclambyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReclambyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
