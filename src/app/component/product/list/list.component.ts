import { SeoConst } from './../../../common/consts/seo.const';
import { EnumBreadcrumb } from '../../../common/enum/breadcrumb.enum';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AbstractComponent } from '../../../common/component/abstract.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractComponent implements OnInit {

  constructor(private meta: Meta, private pageTitle: Title) {
    super();
  }

  ngOnInit() {

    // Add breadcrumb
    this.addBreadCrumbs(this.getBreadcrumbTitle(EnumBreadcrumb.HOME_TITLE), this.getBreadcrumbUrl(EnumBreadcrumb.HOME_URL), true);
    this.addBreadCrumbs(this.getBreadcrumbTitle(EnumBreadcrumb.PRODUCTS_TITLE, 'Adidas Utraboost')
      , this.getBreadcrumbUrl(EnumBreadcrumb.PRODUCTS_URL), false);

    // Set meta for SEO
    this.setPageTitle(this.pageTitle, SeoConst.title_product_list, 'Kappa');
    this.setSeoMetaKeyword(this.meta, SeoConst.keyword_product_list, 'Kappa', 'Thời trang', '3', '4', '5', '6', '7');
    this.setSeoMetaDescription(this.meta, SeoConst.description_product_list, 'Kappa', 'Thời trang');

  }

}
