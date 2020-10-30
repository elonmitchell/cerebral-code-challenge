import React, {FC, useRef, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useChatContext} from '../../store/context';
import {MessageItem} from '../message-item';
import styles from './styles';

export const MessagesList: FC = () => {
  const {messages} = useChatContext()[0];
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (messages.length) {
      scrollRef.current?.scrollToEnd();
    }
  }, [messages.length]);

  return (
    <ScrollView
      ref={scrollRef}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      contentContainerStyle={styles.container}>
      {messages.map((message, index) => (
        <MessageItem data={message} key={index} />
      ))}
    </ScrollView>
  );
};
