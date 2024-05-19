import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeMpProducteurComponent } from './commande-mp-producteur.component';

describe('CommandeMpProducteurComponent', () => {
  let component: CommandeMpProducteurComponent;
  let fixture: ComponentFixture<CommandeMpProducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeMpProducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeMpProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
