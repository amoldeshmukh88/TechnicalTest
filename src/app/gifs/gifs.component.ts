import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service'
@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  gifs: any[] = [];
  subscription : Subscription;
  constructor(private service : MyServiceService) { }

  ngOnInit(): void {
    this.service.getGifs()
    this.subscription = this.service.getSearchGifs()
    .subscribe((response : any) => {
      this.gifs = response;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
