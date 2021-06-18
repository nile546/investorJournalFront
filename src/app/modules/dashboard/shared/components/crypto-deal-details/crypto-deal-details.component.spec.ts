import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDealDetailsComponent } from './crypto-deal-details.component';

describe('CryptoDealDetailsComponent', () => {
  let component: CryptoDealDetailsComponent;
  let fixture: ComponentFixture<CryptoDealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoDealDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
