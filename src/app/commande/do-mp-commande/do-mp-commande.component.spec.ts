import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoMpCommandeComponent } from './do-mp-commande.component';

describe('DoMpCommandeComponent', () => {
  let component: DoMpCommandeComponent;
  let fixture: ComponentFixture<DoMpCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoMpCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoMpCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
