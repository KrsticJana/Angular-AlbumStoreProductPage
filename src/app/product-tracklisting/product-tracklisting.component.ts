import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Album } from "../album";

@Component({
  selector: "app-product-tracklist",
  templateUrl: "./product-tracklisting.component.html",
  styleUrls: ["./product-tracklisting.component.css"],
})
export class ProductTracklistComponent implements OnInit {
  albumInfo: Album;
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }
}
