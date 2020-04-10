import { Component, OnInit } from '@angular/core';
import {IProduct} from './product-model'
@Component({
    template: `
    <div>
        <h1>Product List</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let product of productList" class="col-md-3 mb-5">
            <card [name]="product.name" [url]="product.image" class="card" [isRoutable]=false></card>
            </div>
        </div>
    </div>
    `
})
export class ProductListComponent implements OnInit {
    productList: IProduct[]
    constructor() { }

    ngOnInit(): void {
        this.productList = JSON.parse(localStorage.getItem('products'));
    }
}
