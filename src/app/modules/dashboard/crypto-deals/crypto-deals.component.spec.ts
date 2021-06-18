import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDealsComponent } from './crypto-deals.component';

describe('CryptoDealsComponent', () => {
  let component: CryptoDealsComponent;
  let fixture: ComponentFixture<CryptoDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
