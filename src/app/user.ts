export class User {
    login: string;
    image: string;
    reposurl: string;
    score: number;
    repos = [];
    info: JSON;
    constructor(private object:JSON){
        this.login = object['login'];
        this.image = object['avatar_url'];
        this.reposurl = object['repos_url'];
        this.score = object['score']
    }

}
