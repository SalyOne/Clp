import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsSliderComponent } from './facts-slider.component';

describe('FactsSliderComponent', () => {
  let component: FactsSliderComponent;
  let fixture: ComponentFixture<FactsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
