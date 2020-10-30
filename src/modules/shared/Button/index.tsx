import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  theme: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  theme,
  style,
  children,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.main, styles[theme], style]}
      {...restProps}>
      {children}
    </TouchableOpacity>
  );
};
