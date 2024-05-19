import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMPComponent } from './add-mp.component';

describe('AddMPComponent', () => {
  let component: AddMPComponent;
  let fixture: ComponentFixture<AddMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
