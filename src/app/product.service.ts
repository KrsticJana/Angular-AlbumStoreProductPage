import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json";

  constructor(private http:Http) { }

  getAlbum(id:number):Observable<Album>{
    return this.http.get(this._albumUrl)
    .map((response) => <Album>response.json());
  }

  

}
