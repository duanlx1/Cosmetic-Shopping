import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../common/object/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductService]
})
export class DetailComponent implements OnInit {

  public product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() { }

  private getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).then(res => {
      this.product = res;
    });
  }

}
