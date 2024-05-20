import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCommandeComponent } from './do-commande.component';

describe('DoCommandeComponent', () => {
  let component: DoCommandeComponent;
  let fixture: ComponentFixture<DoCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
