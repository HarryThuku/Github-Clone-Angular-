import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent implements OnInit {

  @Input() repo:JSON;
  repository:Repository;
  constructor() { }

  ngOnInit() {
    this.repository = new Repository(this.repo)
  }

}
