import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyComponent } from './deny.component';

describe('DenyComponent', () => {
  let component: DenyComponent;
  let fixture: ComponentFixture<DenyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DenyComponent]
    });
    fixture = TestBed.createComponent(DenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
