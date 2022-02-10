import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTracklistComponent } from './product-tracklisting.component';

describe('ProductTracklistComponent', () => {
  let component: ProductTracklistComponent;
  let fixture: ComponentFixture<ProductTracklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTracklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
