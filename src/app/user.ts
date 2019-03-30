export class User {
    login: string;
    image: string;
    reposurl: string;
    score: number;
    constructor(private object:JSON){
        this.login = object['login'];
        this.image = object['avatar_url'];
        this.reposurl = object['repos_url'];
        this.score = object['score']
    }
    repos = [];
    info: JSON;
}
