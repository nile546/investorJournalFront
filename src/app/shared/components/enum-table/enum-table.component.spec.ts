import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumTableComponent } from './enum-table.component';

describe('EnumTableComponent', () => {
  let component: EnumTableComponent;
  let fixture: ComponentFixture<EnumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
