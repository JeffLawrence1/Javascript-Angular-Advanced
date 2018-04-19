import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeListingsComponent } from './bike-listings.component';

describe('BikeListingsComponent', () => {
  let component: BikeListingsComponent;
  let fixture: ComponentFixture<BikeListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
