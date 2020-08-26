import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyServiceService {
  private _url:string = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=14Xw8J5tocS99txocCvP9360fK8N2xFN&limit=5"

  constructor(private http: HttpClient) { }
  getRandomGif(){
    return this.http.get(this._url)
  }
}

  