import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDealsTableComponent } from './crypto-deals-table.component';

describe('CryptoDealsTableComponent', () => {
  let component: CryptoDealsTableComponent;
  let fixture: ComponentFixture<CryptoDealsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoDealsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
