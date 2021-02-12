import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExEnfantComponent } from './ex-enfant.component';

describe('ExEnfantComponent', () => {
  let component: ExEnfantComponent;
  let fixture: ComponentFixture<ExEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
