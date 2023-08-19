import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/main/products/services/products-api.service';
import { CategoriesApiService } from '../../services/categories-api.service';

@Component({
  selector: 'products-user-view-page',
  templateUrl: './products-user-view-page.component.html',
  styleUrls: ['./products-user-view-page.component.scss']
})
export class ProductsUserViewPageComponent {
  public categories: string[] = [];
  public products: any[] = [];
  public filteredProducts: any[] = [];
  public totalCount: Number = 0;

  constructor(private _ProductsApiService: ProductsApiService,
    private _CategoriesApiService: CategoriesApiService) { }


  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  private getAllProducts() {
    this._ProductsApiService.getProducts().subscribe({
      next: (res) => {
        this.products =  res;
      },
      error: (error) => {},
      complete: () => {
        this.filteredProducts = [...this.products];
        this.totalCount = this.products.length;
      }
    });
  }

  private getAllCategories() {
    this._CategoriesApiService.getCategories().subscribe({
      next: (res) => {
        this.categories =  res;
      },
      error: (error) => {},
      complete: () => {
      }
    });
  }

  public getSelectedCategories(categories: string[]) {
    this.filteredProducts = this.products.filter((product) => {
      return categories.includes(product.category);
    });
    console.log("FILTERED PRODUCTS", this.filteredProducts)
    this.filteredProducts = this.filteredProducts?.length > 0 ? this.filteredProducts : this.products;
  }
}