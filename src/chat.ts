import Message from "./models/Message";

class Chat {
    messageCallback: ((message: Message) => void) | null;
    typingCallback: ((user: string) => void) | null;
    USERS: string[];
    
    constructor() {
        this.messageCallback = null;
        this.typingCallback = null;

        this.USERS = ['Alice', 'Bob', 'Charlie'];
    }

    randomUser() {
        return this.USERS[Math.floor(Math.random() * this.USERS.length)];
    }

    emitMessage(message: Message) {
        if (this.messageCallback) {
            this.messageCallback(message);
        }
    }

    emitTyping(username: string) {
        if (this.typingCallback) {
            this.typingCallback(username);
        }
    }

    onMessage(cb: (message: Message) => void) {
        if (this.messageCallback) {
            console.warn('Chat.onMessage already registered');
            return;
        }
        this.messageCallback = cb;
    }

    onTyping(cb: (user: string) => void) {
        if (this.typingCallback) {
            console.warn('Chat.onTyping already registered');
            return;
        }
        this.typingCallback = cb;
    }

    sendMessage(text: string) {
        return new Promise<void>((resolve, reject) => {
            if (!text || typeof text !== 'string') {
                reject(new Error('Invalid message'));
                return;
            }

            this.emitMessage(new Message(
                'me',
                text,
                Date.now(),
            ));

            const otherUser = this.randomUser();

            setTimeout(() => {
                this.emitTyping(otherUser);
            }, 500);

            setTimeout(() => {
                this.emitMessage(new Message(
                    otherUser,
                    `Echo: ${text}`,
                    Date.now(),
                ));
                resolve();
            }, 1200);
        });
    }
}

export default Chat;