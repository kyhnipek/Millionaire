import {Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Button from '../../components/Button';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Millionaire</Text>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Button
        title="Start Game"
        onPress={() => {
          navigation.navigate('Game');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
