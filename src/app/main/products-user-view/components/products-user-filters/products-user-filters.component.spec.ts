import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUserFiltersComponent } from './products-user-filters.component';

describe('ProductsUserFiltersComponent', () => {
  let component: ProductsUserFiltersComponent;
  let fixture: ComponentFixture<ProductsUserFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsUserFiltersComponent]
    });
    fixture = TestBed.createComponent(ProductsUserFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
