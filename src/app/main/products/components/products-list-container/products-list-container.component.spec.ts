import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListContainerComponent } from './products-list-container.component';

describe('ProductsListContainerComponent', () => {
  let component: ProductsListContainerComponent;
  let fixture: ComponentFixture<ProductsListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListContainerComponent]
    });
    fixture = TestBed.createComponent(ProductsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
