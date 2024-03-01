import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiefoodieComponent } from './foodiefoodie.component';

describe('FoodiefoodieComponent', () => {
  let component: FoodiefoodieComponent;
  let fixture: ComponentFixture<FoodiefoodieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FoodiefoodieComponent]
    });
    fixture = TestBed.createComponent(FoodiefoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
