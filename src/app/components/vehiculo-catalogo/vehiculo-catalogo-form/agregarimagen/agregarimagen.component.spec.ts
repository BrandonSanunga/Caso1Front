import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarimagenComponent } from './agregarimagen.component';

describe('AgregarimagenComponent', () => {
  let component: AgregarimagenComponent;
  let fixture: ComponentFixture<AgregarimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarimagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
