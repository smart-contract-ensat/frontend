import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublicProductComponent } from './list-public-product.component';

describe('ListPublicProductComponent', () => {
  let component: ListPublicProductComponent;
  let fixture: ComponentFixture<ListPublicProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublicProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublicProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
