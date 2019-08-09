export class Post {

    id: number;
    username: string;
    content: string;
    channelName: string;
    commentID: number;
    likes: number;
    timeStamp: string;
    imageURL: string;

constructor(id:number, username: string, content: string, channelName: string, commentID: number,likes: number, timeStamp: string, imageURL: string) {
        this.id = id;
        this.username = username;
        this.content = content;
        this.channelName = channelName;
        this.commentID = commentID;
        this.likes= likes;
        this.timeStamp = timeStamp;
        this.imageURL = imageURL;
};

}