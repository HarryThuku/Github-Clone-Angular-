import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {GitsearchService} from '../gitsearch.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  login: string;
  user: User;

  constructor( private route: ActivatedRoute, private gitsearch: GitsearchService ) { }

  showdesc(item){
    let desc=document.getElementById(item);
    console.log(desc);
    let cur=desc.style["display"];
    if(cur=="block"){
      desc.style["display"]="none"
    }else{
      desc.style["display"]="block"
    }
  }

  enumerate(data){
    this.user= new User(data);
    this.user.info=data;
    this.gitsearch.fetchrepos(this.user.reposurl).then(
      (data: JSON[])=>{
        this.user.repos=data;
      }
    );
  }

  get(){
    this.gitsearch.fetchuserinfo(this.login).then(
      (data: JSON)=>{this.enumerate(data);}
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.login = params['uname'];
      this.get();
    });
    this.get();
  };

};
