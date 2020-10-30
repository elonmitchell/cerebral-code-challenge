import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Message} from '../../../../types';
import styles from './styles';

interface MessageItemProps {
  data: Message;
}

export const MessageItem: FC<MessageItemProps> = ({data}) => {
  const {message, sender} = data;
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.title,
          ...(sender === 'You' && styles.highlight),
        }}>
        {sender}
      </Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
