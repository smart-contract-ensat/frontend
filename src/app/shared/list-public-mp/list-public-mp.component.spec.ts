import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublicMpComponent } from './list-public-mp.component';

describe('ListPublicMpComponent', () => {
  let component: ListPublicMpComponent;
  let fixture: ComponentFixture<ListPublicMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublicMpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublicMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
