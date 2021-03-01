import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInterfaceComponent } from './section-interface.component';

describe('SectionInterfaceComponent', () => {
  let component: SectionInterfaceComponent;
  let fixture: ComponentFixture<SectionInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
