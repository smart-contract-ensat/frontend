import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMPComponent } from './table-mp.component';

describe('TableMPComponent', () => {
  let component: TableMPComponent;
  let fixture: ComponentFixture<TableMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
