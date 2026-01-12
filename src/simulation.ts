import Chat from "./chat";
import { messages } from './db/messages';

class Simulation {
    chat: Chat;

    constructor() {
        this.chat = new Chat();
    }

    startSimulation() {
        setTimeout(() => {
            this.chat.emitMessage(messages[0]);
            this.chat.emitMessage(messages[1]);
        }, 700);

        let ms = 3700;

        for (let i = 2; i < messages.length; i++) {
            setTimeout(() => {
                this.chat.emitMessage(messages[i]);
            }, ms);
            ms += 3000;
        }
    }
}

export default Simulation;