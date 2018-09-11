import { EnumBreadcrumb } from '../../../common/enum/breadcrumb.enum';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../common/object/product';
import { AbstractComponent } from '../../../common/component/abstract.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductService]
})
export class DetailComponent extends AbstractComponent implements OnInit {

  public product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    // Add breadcrumb
    this.addBreadCrumbs(this.getBreadcrumbTitle(EnumBreadcrumb.HOME_TITLE), this.getBreadcrumbUrl(EnumBreadcrumb.HOME_URL), true);
    this.addBreadCrumbs(this.getBreadcrumbTitle(EnumBreadcrumb.PRODUCTS_TITLE, 'Clothing')
      , this.getBreadcrumbUrl(EnumBreadcrumb.PRODUCTS_URL), true);
    this.addBreadCrumbs(this.getBreadcrumbTitle(EnumBreadcrumb.PRODUCT_DETAIL_TITLE, 'Clothing')
      , this.getBreadcrumbUrl(EnumBreadcrumb.PRODUCTS_URL), false);

  }

  private getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).then(res => {
      this.product = res;
    });
  }

}
