import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpashHeaderComponent } from './spash-header.component';

describe('SpashHeaderComponent', () => {
  let component: SpashHeaderComponent;
  let fixture: ComponentFixture<SpashHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpashHeaderComponent]
    });
    fixture = TestBed.createComponent(SpashHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
