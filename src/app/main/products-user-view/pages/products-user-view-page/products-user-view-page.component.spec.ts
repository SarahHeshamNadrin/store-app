import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUserViewPageComponent } from './products-user-view-page.component';

describe('ProductsUserViewPageComponent', () => {
  let component: ProductsUserViewPageComponent;
  let fixture: ComponentFixture<ProductsUserViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsUserViewPageComponent]
    });
    fixture = TestBed.createComponent(ProductsUserViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
