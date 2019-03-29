export class User {
    login: string;
    image: string;
    reposurl: string;
    constructor(private object:JSON){
        this.login = object['login'];
        this.image = object['avatar_url'];
        this.reposurl = object['repos_url'];
    }
    repos = [];
    info: JSON;
}
