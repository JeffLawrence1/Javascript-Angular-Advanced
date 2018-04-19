import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAddComponent } from './bike-add.component';

describe('BikeAddComponent', () => {
  let component: BikeAddComponent;
  let fixture: ComponentFixture<BikeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
