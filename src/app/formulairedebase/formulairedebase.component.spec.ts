import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairedebaseComponent } from './formulairedebase.component';

describe('FormulairedebaseComponent', () => {
  let component: FormulairedebaseComponent;
  let fixture: ComponentFixture<FormulairedebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairedebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairedebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
