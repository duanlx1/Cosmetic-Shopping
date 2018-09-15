import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;


@Injectable()
export class ProductService {

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  products: any = {};

  constructor(private http: Http) {}

  /**
   * Get product by Id
   * @param productId productId
   */
  public getProduct(productId: string): Promise<any> {
    const cpParams = new URLSearchParams();
    cpParams.set('id', productId);
    cpParams.set('apikey', API_KEY);

    const options = new RequestOptions({ headers: this.headers, params: cpParams });

    return this.http.get(API_URL + '/product', options)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);

  }

  public getAllCategories(): Promise<any> {
    const options = new RequestOptions({ headers: this.headers});
    return this.http.get(API_URL + '/product_categories', options)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  /**
   * Handle error.
   * @param error Error
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
