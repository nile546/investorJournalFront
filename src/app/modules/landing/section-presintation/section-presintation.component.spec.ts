import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPresintationComponent } from './section-presintation.component';

describe('SectionPresintationComponent', () => {
  let component: SectionPresintationComponent;
  let fixture: ComponentFixture<SectionPresintationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPresintationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPresintationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
