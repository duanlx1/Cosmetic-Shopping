import { SeoConst } from './../../../common/consts/seo.const';
import { EnumBreadcrumb } from '../../../common/enum/breadcrumb.enum';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AbstractComponent } from '../../../common/component/abstract.component';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ProductService]
})
export class ListComponent extends AbstractComponent implements OnInit {

  categories = [];

  constructor(private meta: Meta, private pageTitle: Title, private productService: ProductService) {
    super();
  }

  ngOnInit() {

    // this.getAllCategories();

    // Add breadcrumb
    this.addBreadCrumbs(this.getBreadcrumbTitle(EnumBreadcrumb.HOME_TITLE), this.getBreadcrumbUrl(EnumBreadcrumb.HOME_URL), true);
    this.addBreadCrumbs(this.getBreadcrumbTitle(EnumBreadcrumb.PRODUCTS_TITLE, 'Adidas Utraboost')
      , this.getBreadcrumbUrl(EnumBreadcrumb.PRODUCTS_URL), false);

    // Set meta for SEO
    this.setPageTitle(this.pageTitle, SeoConst.title_product_list, 'Kappa');
    this.setSeoMetaKeyword(this.meta, SeoConst.keyword_product_list, 'Kappa', 'Thời trang', '3', '4', '5', '6', '7');
    this.setSeoMetaDescription(this.meta, SeoConst.description_product_list, 'Kappa', 'Thời trang');

  }

  private getAllCategories () {
    this.productService.getAllCategories().then(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }

}
