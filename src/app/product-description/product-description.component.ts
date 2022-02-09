import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from 'app/album';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;

  constructor(private _productService:ProductService ) { }

  ngOnInit() {
    this._productService.getAlbum(1)
    .subscribe(response => this.albumInfo = response);
  }

}
