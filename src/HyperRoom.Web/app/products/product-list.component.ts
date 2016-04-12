import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product'
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import {ProductService} from './product.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List Demo 2';
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
    showImage: boolean = false;

    listFilter: string;

    products: IProduct[];

    constructor(private _productService: ProductService){}


    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = error);
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        console.log('Product List Component -> star clicked');
        this.pageTitle = 'Product List: ' + message;
    }
}