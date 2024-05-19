import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMPComponent } from './update-mp.component';

describe('UpdateMPComponent', () => {
  let component: UpdateMPComponent;
  let fixture: ComponentFixture<UpdateMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
