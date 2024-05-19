import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMPComponent } from './detail-mp.component';

describe('DetailMPComponent', () => {
  let component: DetailMPComponent;
  let fixture: ComponentFixture<DetailMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
