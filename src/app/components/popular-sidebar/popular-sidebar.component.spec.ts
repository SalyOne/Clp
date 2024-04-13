import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSidebarComponent } from './popular-sidebar.component';

describe('PopularSidebarComponent', () => {
  let component: PopularSidebarComponent;
  let fixture: ComponentFixture<PopularSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
