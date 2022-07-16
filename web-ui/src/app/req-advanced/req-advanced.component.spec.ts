import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqAdvancedComponent } from './req-advanced.component';

describe('ReqAdvancedComponent', () => {
  let component: ReqAdvancedComponent;
  let fixture: ComponentFixture<ReqAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
