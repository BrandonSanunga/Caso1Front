import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFindidComponent } from './client-findid.component';

describe('ClientFindidComponent', () => {
  let component: ClientFindidComponent;
  let fixture: ComponentFixture<ClientFindidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFindidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFindidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
