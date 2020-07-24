import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCvComponent } from './item-cv.component';

describe('ItemCvComponent', () => {
  let component: ItemCvComponent;
  let fixture: ComponentFixture<ItemCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
