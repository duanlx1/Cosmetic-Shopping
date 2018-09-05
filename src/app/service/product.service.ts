import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProductService {
    private httpOptions = {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };

    /**
     * The constructer
     * @param http http client
     */
    constructor(private http: Http) { }



    /**
     * Handle error.
     * @param error Error
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
