import { Component, OnInit} from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {

  public dataSource = new MatTableDataSource<any>();
  constructor(private _ApiService: ProductsApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts() {
    this._ApiService.getProducts().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource<any>(res);
      },
      error: (error) => {},
      complete: () => {
      }
    });
  }
}