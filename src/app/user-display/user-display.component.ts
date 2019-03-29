import { Component, Input, OnInit } from '@angular/core';
import {User} from '../user'
import {GitsearchService} from '../gitsearch.service'


@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  @Input() currentuser:JSON;
  user:User;
  constructor() { }

  ngOnInit() {
    this.user = new User(this.currentuser);
  }
}
