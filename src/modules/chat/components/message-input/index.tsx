import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../../../shared/Button';
import {useChatContext} from '../../store/context';
import styles from './styles';

export const MessageInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useChatContext();
  const handleSendMessage = () => {
    dispatch({
      type: 'ADD_ANSWER',
      message: inputValue,
    });
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        multiline
        editable={state.step !== -1 && state.step !== 9}
        onChangeText={(text) => setInputValue(text)}
        style={styles.input}
      />
      <Button theme="primary" onPress={handleSendMessage}>
        <Icon name="paper-plane-outline" size={22} color="#FFFFFF" />
      </Button>
    </View>
  );
};
