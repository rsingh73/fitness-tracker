import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrainingsComponent } from './past-trainings.component';

describe('PastTrainingsComponent', () => {
  let component: PastTrainingsComponent;
  let fixture: ComponentFixture<PastTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastTrainingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
