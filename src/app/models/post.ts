export class Post{
    constructor(
        public id: number,
        public user_id: number,
        public category_id: string,
        public title: string,
        public content: string,
        public image: string,
        public createdAd: any
    ){}
}