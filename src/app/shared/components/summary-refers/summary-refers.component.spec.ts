import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryRefersComponent } from './summary-refers.component';

describe('SummaryRefersComponent', () => {
  let component: SummaryRefersComponent;
  let fixture: ComponentFixture<SummaryRefersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryRefersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryRefersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
