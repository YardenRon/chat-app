import React, { useEffect, useState } from 'react';
import './App.scss';
import MessageBubble from './MessageBubble';
import Message from '../models/Message';
import useChat from '../hooks/useChat';

type AppProps = {}

const App = ({ }: AppProps) => {
  const chat = useChat();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [typingStatus, setTypingStatus] = useState<string>("");

  useEffect(() => {
    chat.onMessage(message => {
      setChatMessages(prevMessages => [...prevMessages, message]);
    });
    chat.onTyping(user => setTypingStatus(`${user} is typing...`));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTypingStatus("");
    }, 2000);
  }, [typingStatus]);

  let isSameAuthor = false;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentMessage(e.target.value);

  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentMessage) {
      chat.sendMessage(currentMessage);
      setCurrentMessage("");
    }
  };

  return (
    <div className="app">
      <div className="messages">
        {chatMessages.map((message: Message, index: number) => {
          isSameAuthor = message.user === 'me' || (index > 0 && message.user === chatMessages[index - 1].user);
          return <MessageBubble key={index} {...message} showUser={!isSameAuthor} />
        })}
      </div>
      <div className="action-bar">
        <form style={{ height: "100%", width: "100%" }} onSubmit={onSend}>
          <div className="status"> {typingStatus} </div>
          <input type="text" className="message-text" value={currentMessage} onChange={onInputChange} />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
