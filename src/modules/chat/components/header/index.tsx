import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from '../../../shared/Avatar';
import {useChatContext} from '../../store/context';
import styles from './styles';

export const ChatHeader = () => {
  const [state] = useChatContext();
  const {firstName, lastName, avatar} = state.provider;

  return (
    <View style={styles.container}>
      <Avatar url={avatar} />
      <Text style={styles.title}>
        {[firstName, lastName].filter(Boolean).join(' ')}
      </Text>
    </View>
  );
};
