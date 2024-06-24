import {Dimensions, StyleSheet} from 'react-native';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {},
  question: {
    height: dim.height / 3,
    borderWidth: 1,
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  questionText: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  AB: {
    borderWidth: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CD: {
    borderWidth: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
