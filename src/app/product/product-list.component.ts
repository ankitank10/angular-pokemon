import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <div>
        <h1>Product List</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let product of productList" class="col-md-3 mb-5">
                <div class="card card-style">
                    <img
                    class="card-img-top rounded mx-auto mt-2 card-custom card-header"
                    [src]="product.image"
                    />
                    <div class="card-body mx-auto">
                        <h6 class="card-title">
                            {{product.name}}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    styles:[`
        .card-custom {width: 5em; height: 5em; }
        .card-style {
            opacity: 0.95;
            box-shadow: 0 0 11px rgba(33,33,33,.2);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .card-style:hover {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        }
    `]
})
export class ProductListComponent implements OnInit {
    productList: any
    constructor() { }

    ngOnInit(): void {
        this.productList = JSON.parse(localStorage.getItem('products'));
    }
}
