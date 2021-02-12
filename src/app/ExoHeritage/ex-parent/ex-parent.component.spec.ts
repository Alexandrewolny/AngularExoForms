import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExParentComponent } from './ex-parent.component';

describe('ExParentComponent', () => {
  let component: ExParentComponent;
  let fixture: ComponentFixture<ExParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
