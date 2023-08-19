import { Component, Input } from '@angular/core';

@Component({
  selector: 'products-user-view-list',
  templateUrl: './products-user-view-list.component.html',
  styleUrls: ['./products-user-view-list.component.scss']
})
export class ProductsUserViewListComponent {

  @Input() products: any[] = [];
  @Input() totalCount: Number = 0;

  public identify(item: any){
    return item.id; 
  }

}
