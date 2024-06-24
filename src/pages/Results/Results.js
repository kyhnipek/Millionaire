import {Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Results.style';
import {useState} from 'react';
import Button from '../../components/Button';

const Results = ({navigation, route}) => {
  console.log(route.params);
  const point = route.params.toString();
  const [highest, setHighest] = useState(0);

  useEffect(() => {
    const getHighestScore = async () => {
      try {
        const value = await AsyncStorage.getItem('highest');
        if (value !== null) {
          setHighest(value);
          console.log('success');
        }
      } catch (e) {
        console.log(e);
      }
    };
    getHighestScore();
  }, [highest]);

  const saveScore = async value => {
    try {
      await AsyncStorage.setItem('highest', value);
    } catch (e) {
      // saving error
    }
  };
  const handleSave = () => {
    if (point > highest) {
      saveScore(point);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.title}>Highest Score: {highest}</Text>
      <Text style={styles.title}>You earn {point} point</Text>
      {point > highest ? (
        <Button
          title="Save Score"
          onPress={() => {
            handleSave();
          }}
          theme="true"
        />
      ) : null}
      <Button
        title="Play Again"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
};

export default Results;
