import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'products-user-filters',
  templateUrl: './products-user-filters.component.html',
  styleUrls: ['./products-user-filters.component.scss']
})
export class ProductsUserFiltersComponent {

  @Output() selectedCategoriesChange = new EventEmitter();
  @ViewChild('categoriesList') categoriesList: any  = null;
  @Input() categories: any[] = [];

  public selectedCategories: any[] = [];

  public getSelectedOption(event: any) {
    if(event) {
      this.selectedCategories = this.categoriesList?.selectedOptions?.selected?.map((item: any) => item._value);
      this.selectedCategoriesChange.emit({categories: this.selectedCategories});
    }
  }
}
