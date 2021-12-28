import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregarRepuestosComponent } from './lista-entregar-repuestos.component';

describe('ListaEntregarRepuestosComponent', () => {
  let component: ListaEntregarRepuestosComponent;
  let fixture: ComponentFixture<ListaEntregarRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEntregarRepuestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntregarRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
