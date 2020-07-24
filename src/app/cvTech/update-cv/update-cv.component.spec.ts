import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCvComponent } from './update-cv.component';

describe('UpdateCvComponent', () => {
  let component: UpdateCvComponent;
  let fixture: ComponentFixture<UpdateCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
