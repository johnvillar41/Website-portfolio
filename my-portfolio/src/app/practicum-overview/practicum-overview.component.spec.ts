import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticumOverviewComponent } from './practicum-overview.component';

describe('PracticumOverviewComponent', () => {
  let component: PracticumOverviewComponent;
  let fixture: ComponentFixture<PracticumOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticumOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticumOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
