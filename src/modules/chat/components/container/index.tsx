import React, {FC} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

export const ChatContainer: FC = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
