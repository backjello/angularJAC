import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprodottoComponent } from './formprodotto.component';

describe('FormprodottoComponent', () => {
  let component: FormprodottoComponent;
  let fixture: ComponentFixture<FormprodottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormprodottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
