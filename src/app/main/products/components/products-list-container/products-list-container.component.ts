import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'products-list-container',
  templateUrl: './products-list-container.component.html',
  styleUrls: ['./products-list-container.component.scss']
})
export class ProductsListContainerComponent implements OnChanges{

  @Input() dataSource: any;
  @ViewChild('paginator') paginator: MatPaginator | null = null;

  public displayedColumns: string[] = 
  ['id', 'title', 'description', 'price', 'category', 'rating', 'actions'];

  pageSize = 10; // Number of items to display per page
  pageSizeOptions: number[] = [5, 10, 25, 100]; // Options for the page size dropdown;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']?.currentValue) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
