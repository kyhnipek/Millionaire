import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  touch: {
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const styles = {
  primary: StyleSheet.create({
    ...baseStyle,
    touch: {
      ...baseStyle.touch,
      backgroundColor: 'blue',
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  wrong: StyleSheet.create({
    ...baseStyle,
    touch: {
      ...baseStyle.touch,
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: 'white',
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  true: StyleSheet.create({
    ...baseStyle,
    touch: {
      ...baseStyle.touch,
      backgroundColor: 'green',
      borderWidth: 1,
      borderColor: 'white',
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
};

export default styles;
