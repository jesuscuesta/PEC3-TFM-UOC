import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereersComponent } from './refereers.component';

describe('RefereersComponent', () => {
  let component: RefereersComponent;
  let fixture: ComponentFixture<RefereersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
