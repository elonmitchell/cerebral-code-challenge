import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

interface AvatarProps {
  url?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const {url} = props;
  return <Image source={{uri: url}} style={styles.avatar} />;
};
