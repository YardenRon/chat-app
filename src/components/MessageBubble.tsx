import React from 'react';
import './MessageBubble.scss';
import Message from '../models/Message';

function stringToColor(str: string) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % 360;

  return `hsl(${hue}, 65%, 55%)`;
}

type MessageBubbleProps = Message & {
    showUser: boolean;
};

const MessageBubble = ({user, content, time, showUser }: MessageBubbleProps) => {
    const formattedTime = new Date(time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={user === 'me'? 'container me' : 'container'}>
            { showUser? <div className='user' style={{ color: stringToColor(user)}}>{user}</div> : null }
            <div className='content'>{content}</div>
            <div className='time'>{formattedTime}</div>
        </div>
    );
};

export default MessageBubble;