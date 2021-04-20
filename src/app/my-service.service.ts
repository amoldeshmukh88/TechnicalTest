import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
gifs = new BehaviorSubject<any>([])
  constructor(private http:HttpClient ) { }

  getGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=1C6t8vT0Y99c5nAbi3qGK7FdWC79keUb&limit=100`)
   .subscribe((respose: any) => {
     this.gifs.next(respose.data);
   });
  }

  searchGifs(gifName : string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=1C6t8vT0Y99c5nAbi3qGK7FdWC79keUb&limit=100`)
    .subscribe((respose: any) => {
      this.gifs.next(respose.data);
    });
  }

  getSearchGifs(){
    return this.gifs.asObservable();
  }
}
