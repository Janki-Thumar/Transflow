import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocarouselComponent } from './democarousel.component';

describe('DemocarouselComponent', () => {
  let component: DemocarouselComponent;
  let fixture: ComponentFixture<DemocarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemocarouselComponent]
    });
    fixture = TestBed.createComponent(DemocarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
