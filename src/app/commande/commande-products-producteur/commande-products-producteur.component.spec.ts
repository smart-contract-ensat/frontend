import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeProductsProducteurComponent } from './commande-products-producteur.component';

describe('CommandeProductsProducteurComponent', () => {
  let component: CommandeProductsProducteurComponent;
  let fixture: ComponentFixture<CommandeProductsProducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeProductsProducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeProductsProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
