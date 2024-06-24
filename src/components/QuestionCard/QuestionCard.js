import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../Button';
import styles from './QuestionCard.style';

const QuestionCard = ({question, onPress, timer}) => {
  const [answered, setAnswered] = useState(false);
  const [theme, setTheme] = useState([]);
  const [correctIndex, setCorrectIndex] = useState();

  useEffect(() => {
    setTheme(['primary', 'primary', 'primary', 'primary']);
    setAnswered(false);
    const getCorrectIndex = () => {
      question.answers.map(i => {
        if (i === question.correct) {
          setCorrectIndex(question.answers.indexOf(i));
        }
      });
    };
    getCorrectIndex();
  }, [question]);

  const handleTheme = index => {
    return theme[index];
  };

  const handleSelect = index => {
    setAnswered(true);
    const answer = question.answers[index];
    if (answer === question.correct) {
      const newTheme = [...theme];
      newTheme[index] = 'true';
      setTheme(newTheme);

      return onPress(answer);
    } else {
      const newTheme = [...theme];
      newTheme[index] = 'wrong';
      newTheme[correctIndex] = 'true';
      setTheme(newTheme);

      return onPress(answer);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{question.questions}</Text>
      </View>

      <View style={styles.AB}>
        <Button
          title={'A. ' + question.answers[0]}
          onPress={() => {
            handleSelect(0);
          }}
          disabled={timer === 0 || answered}
          theme={answered ? handleTheme(0) : 'primary'}
        />
        <Button
          title={'B. ' + question.answers[1]}
          onPress={() => {
            handleSelect(1);
          }}
          disabled={timer === 0 || answered}
          theme={answered ? handleTheme(1) : 'primary'}
        />
      </View>
      <View style={styles.CD}>
        <Button
          title={'C. ' + question.answers[2]}
          onPress={() => {
            handleSelect(2);
          }}
          disabled={timer === 0 || answered}
          theme={answered ? handleTheme(2) : 'primary'}
        />
        <Button
          title={'D. ' + question.answers[3]}
          onPress={() => {
            handleSelect(3);
          }}
          disabled={timer === 0 || answered}
          theme={answered ? handleTheme(3) : 'primary'}
        />
      </View>
    </View>
  );
};
export default QuestionCard;
