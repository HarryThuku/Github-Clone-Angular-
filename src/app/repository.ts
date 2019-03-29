import {User} from './user'
export class Repository {
    name:string;
    description:string;
    owner: User;
    lang:string;
    link:string;
    constructor(private object:JSON){
        this.name = this.object['name'];
        this.description=this.object['description'];
        this.owner = new User(object['owner']);
        this.lang = this.object['language'];
        this.link = this.object['html_url'];
    }

}
