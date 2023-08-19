import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUserViewListComponent } from './products-user-view-list.component';

describe('ProductsUserViewListComponent', () => {
  let component: ProductsUserViewListComponent;
  let fixture: ComponentFixture<ProductsUserViewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsUserViewListComponent]
    });
    fixture = TestBed.createComponent(ProductsUserViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
