import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
  FC,
  useEffect,
} from 'react';
import {Action, State} from './types';
import {chatReducer, initialState} from './reducer';
import {useQuestions} from './hooks';

export type ChatContextType = [State, Dispatch<Action>];

export const ChatContext = createContext<ChatContextType>(null as never);

export const useChatContext = () => useContext(ChatContext);

export const ChatContextProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const questions = useQuestions();

  useEffect(() => {
    if (questions.length) {
      dispatch({
        type: 'SET_QUESTIONS',
        questions,
      });
      dispatch({
        type: 'GOTO_STEP',
        step: 1,
      });
    }
  }, [questions]);

  useEffect(() => {
    if (state.messages.length) {
      const lastMessage = state.messages[state.messages.length - 1];
      if (lastMessage.sender === 'You') {
        dispatch({
          type: 'HANDLE_ANSWER',
          answer: lastMessage.message,
        });
      }
    }
  }, [state.messages]);

  return (
    <ChatContext.Provider value={[state, dispatch]}>
      {children}
    </ChatContext.Provider>
  );
};
