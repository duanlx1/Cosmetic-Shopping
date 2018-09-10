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
    this.addBreadCrumbs('Home', '/home', true);
    this.addBreadCrumbs('Product list', '/product/list', true);
    this.addBreadCrumbs('Product detail', '', false);
    console.log(this.breadcrumbsDtoList);
  }

  private getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).then(res => {
      this.product = res;
    });
  }

}
