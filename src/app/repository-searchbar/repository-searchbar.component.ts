import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../gitsearch.service'

@Component({
  selector: 'app-repository-searchbar',
  templateUrl: './repository-searchbar.component.html',
  styleUrls: ['./repository-searchbar.component.css']
})
export class RepositorySearchbarComponent implements OnInit {
searchString = '';
results = [];
  constructor( private searchservice: GitsearchService ) { }

  search(){
    this.searchservice.getrepos(this.searchString).then((data :JSON)=>{
      this.results=data['items'];
    })
  }

  ngOnInit() {
  }

}
