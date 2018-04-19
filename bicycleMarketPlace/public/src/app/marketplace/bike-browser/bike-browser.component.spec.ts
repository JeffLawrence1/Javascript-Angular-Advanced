import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeBrowserComponent } from './bike-browser.component';

describe('BikeBrowserComponent', () => {
  let component: BikeBrowserComponent;
  let fixture: ComponentFixture<BikeBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
