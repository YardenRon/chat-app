import Message from '../models/Message';

export const messages = [
    new Message('Yarden', 'Hello everyone!', Date.now()),
    new Message('Yarden', 'Whats up?', Date.now()+100000),
    new Message('Yarden', 'Advaaaaa', Date.now()+100000),
    new Message('Adva', 'Ma kore kapara?', Date.now()+200000),
    new Message('Yarden', 'I like to eat pizza', Date.now()+1000000),
    new Message('Yarden', 'yammy :)', Date.now()+1000000),
    new Message('me', 'yammy :)', Date.now()+10000000),
    new Message('me', 'yammy :)', Date.now()+10000000),
];