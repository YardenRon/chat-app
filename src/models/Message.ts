class Message {
    user: string;
    content: string;
    time: number;

    constructor(user: string, content: string, time: number) {
        this.user = user;
        this.content = content;
        this.time = time;
    }
}

export default Message;