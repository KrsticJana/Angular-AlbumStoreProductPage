import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Album } from "../album";

@Component({
  selector: "app-product-tracklist",
  templateUrl: "./product-tracklist.component.html",
  styleUrls: ["./product-tracklist.component.css"],
})
export class ProductTracklistComponent implements OnInit {
  albumInfo: Album;
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService
      .getAlbum(1)
      .subscribe((response) => (this.albumInfo = response));
  }
}
