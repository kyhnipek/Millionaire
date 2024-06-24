import {Dimensions, StyleSheet} from 'react-native';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: dim.width - 10,
    margin: 5,
  },
  touch: {
    backgroundColor: '#3498db',
    width: (dim.width - 20) / 12,
    height: (dim.width - 20) / 12,
    margin: 3,
    padding: 5,
    marginTop: 20,
    borderRadius: 50,
    borderWidth: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
