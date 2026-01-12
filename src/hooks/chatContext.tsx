import { createContext, useState, ReactNode } from "react";
import Chat from "../chat";

export const ChatContext = createContext<Chat | null>(null);

type ChatProviderProps = {
    chat: Chat;
    children: ReactNode;
}

export function ChatProvider({ chat, children } : ChatProviderProps) {
  return (
    <ChatContext.Provider value={chat}>
      {children}
    </ChatContext.Provider>
  );
}