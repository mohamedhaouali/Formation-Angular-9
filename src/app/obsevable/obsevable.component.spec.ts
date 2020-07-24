import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsevableComponent } from './obsevable.component';

describe('ObsevableComponent', () => {
  let component: ObsevableComponent;
  let fixture: ComponentFixture<ObsevableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsevableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsevableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
