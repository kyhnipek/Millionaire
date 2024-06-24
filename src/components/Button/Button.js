import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({title, onPress, disabled, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      style={styles[theme].touch}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles[theme].text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
