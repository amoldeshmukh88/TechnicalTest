import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : MyServiceService) { }

  ngOnInit(): void {
  }

  search(searchString : string){
  if (searchString !== ''){
    this.service.searchGifs(searchString);
    }
    }
    
  
  
}
