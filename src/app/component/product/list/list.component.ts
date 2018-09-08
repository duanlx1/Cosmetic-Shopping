import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Seo } from '../../../../resources/seo';
import { SeoUtil } from '../../../common/utils/seoUtil';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  seoKw: string;
  seoDes: string;

  constructor(private meta: Meta, private pageTitle: Title) { }

  ngOnInit() {

    // Set meta for SEO
    SeoUtil.setPageTitle(this.pageTitle, Seo.title_product_list, 'Kappa');
    SeoUtil.setSeoMetaKeyword(this.meta, Seo.keyword_product_list, 'Kappa', 'Thời trang');
    SeoUtil.setSeoMetaDescription(this.meta, Seo.description_product_list, 'Kappa', 'Thời trang');

  }

}
