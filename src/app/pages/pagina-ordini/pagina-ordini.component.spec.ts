import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOrdiniComponent } from './pagina-ordini.component';

describe('PaginaOrdiniComponent', () => {
  let component: PaginaOrdiniComponent;
  let fixture: ComponentFixture<PaginaOrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaOrdiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
