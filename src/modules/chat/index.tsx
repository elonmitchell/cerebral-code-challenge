import React from 'react';
import {
  ChatContainer,
  ChatHeader,
  MessagesList,
  MessageInput,
} from './components';
import {ChatContextProvider} from './store/context';

export const ChatMain = () => {
  return (
    <ChatContextProvider>
      <ChatContainer>
        <ChatHeader />
        <MessagesList />
        <MessageInput />
      </ChatContainer>
    </ChatContextProvider>
  );
};
