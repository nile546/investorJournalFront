import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinkoffUpdateModalComponent } from './tinkoff-update-modal.component';

describe('TinkoffUpdateModalComponent', () => {
  let component: TinkoffUpdateModalComponent;
  let fixture: ComponentFixture<TinkoffUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinkoffUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinkoffUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
