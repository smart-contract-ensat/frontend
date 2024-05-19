import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMPComponent } from './list-mp.component';

describe('ListMPComponent', () => {
  let component: ListMPComponent;
  let fixture: ComponentFixture<ListMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
