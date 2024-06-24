import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    width: 30,
    height: 30,
    margin: 3,
    padding: 5,
    borderRadius: 50,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

const styles = {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    touch: {
      ...baseStyle.touch,
      backgroundColor: 'blue',
    },
    title: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  wrong: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    touch: {
      ...baseStyle.touch,
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: 'white',
    },
    title: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  current: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    touch: {
      ...baseStyle.touch,
      backgroundColor: '#c7c709',
      borderWidth: 1,
      borderColor: 'white',
    },
    title: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  true: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    touch: {
      ...baseStyle.touch,
      backgroundColor: 'green',
      borderWidth: 1,
      borderColor: 'white',
    },
    title: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
};

export default styles;
