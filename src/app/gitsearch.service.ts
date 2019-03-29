import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  apikey: string = environment.apikey;
  constructor(private http:HttpClient) { }


  getusers(search){
    let link = `https://api.github.com/search/users?q='${search}'&access_token=${this.apikey}`

    return new Promise((resolve,reject)=>{
      this.http.get<JSON>(link).toPromise().then(response=>{
        resolve(response)
      }, error =>{
        reject()
      });
    });
  }



  getrepos(search){
    let link=`https://api.github.com/search/repositories?q=${search}&access_token=${this.apikey}`;
    return new Promise((resolve,reject)=> {
        this.http.get<JSON> (link).toPromise().then(response => {
            resolve(response)
          }, error => {
            reject()
          }
        );
      }
    );
  }
  
  
  fetchrepos(link){
    return new Promise((resolve,reject)=> {
        this.http.get<JSON[]>(`${link}?access_token=${this.apikey}`).toPromise().then(response => {
            resolve(response)
          }, error => {
            reject()
          }
        );
      }
    );
  }



  fetchuserinfo(username){
    return new Promise((resolve,reject)=> {
        this.http.get<JSON[]>(`https://api.github.com/users/${username}?access_token=${this.apikey}`).toPromise().then(response => {
            resolve(response)
          }, error => {
            reject()
          }
        );
      }
    );
  }

}
