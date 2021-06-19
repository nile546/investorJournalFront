import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternTableComponent } from './pattern-table.component';

describe('PatternTableComponent', () => {
  let component: PatternTableComponent;
  let fixture: ComponentFixture<PatternTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
