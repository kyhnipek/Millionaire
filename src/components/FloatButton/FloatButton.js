import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FloatButton.style';

const FloatButton = ({title, onPress, theme = 'Primary'}) => {
  return (
    <View style={styles[theme].container}>
      <TouchableOpacity onPress={onPress} style={styles[theme].touch}>
        <Text style={styles[theme].title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatButton;
