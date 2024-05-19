import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeMpFourniseurComponent } from './commande-mp-fourniseur.component';

describe('CommandeMpFourniseurComponent', () => {
  let component: CommandeMpFourniseurComponent;
  let fixture: ComponentFixture<CommandeMpFourniseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeMpFourniseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeMpFourniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
