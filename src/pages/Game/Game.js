import {Text, View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import QuestionCard from '../../components/QuestionCard';
import styles from './Game.style';
import QuestionHeaderCard from '../../components/QuestionHeaderCard';

const Game = ({navigation}) => {
  const API_URL =
    'https://opentdb.com/api.php?amount=10&category=9&type=multiple';
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userAnswer, setUserAnswer] = useState([]);
  const [point, setPoint] = useState(0);
  const [timerValue, setTimerValue] = useState(12);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerActive && timerValue > 0) {
      interval = setInterval(() => {
        setTimerValue(seconds => seconds - 1);
      }, 1000);
    } else if (timerValue === 0) {
      clearInterval(interval);
      setTimerActive(false);
      console.log('Süre doldu cevap vermedin');
    }
    return () => clearInterval(interval);
  }, [timerActive, timerValue]);

  const startTimer = () => {
    setTimerValue(12);
    setTimerActive(true);
  };

  const stopTimer = () => {
    setTimerActive(false);
  };

  const checkAnswer = answer => {
    const cr = questions[currentQuestion].correct;
    stopTimer();
    if (answer === cr) {
      setUserAnswer([...userAnswer, true]);
      setPoint(point + 100);
    } else {
      setUserAnswer([...userAnswer, false]);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const response = await axios.get(API_URL);
    const result = response.data.results;

    function shuffleArray(array) {
      for (let k = array.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        [array[k], array[j]] = [array[j], array[k]];
      }
      return array;
    }

    const api_data = result.map((incorrect_answers, i) => {
      const correct = result[i].incorrect_answers.concat(
        result[i].correct_answer,
      );
      shuffleArray(correct);
      return {
        questions: result[i].question,
        correct: result[i].correct_answer,
        answers: correct,
      };
    });

    setQuestions(api_data);
    setIsLoading(false);
    startTimer();
  };

  const renderPage = () => {
    return (
      <>
        <QuestionCard
          question={questions[currentQuestion]}
          onPress={item => {
            checkAnswer(item);
          }}
          timer={timerValue}
        />
        <Button
          title="Next"
          onPress={() => {
            if (currentQuestion < 9) {
              setCurrentQuestion(currentQuestion + 1);
              startTimer();
              console.log(questions[currentQuestion + 1].correct);
            } else {
              navigation.navigate('Results', point);
            }
          }}
          theme="true"
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Score: {point}</Text>
        <Text style={styles.header}>Time: {timerValue}</Text>
      </View>

      <QuestionHeaderCard current={currentQuestion} correct={userAnswer} />
      {isLoading ? <Text>Loading...</Text> : renderPage()}
    </SafeAreaView>
  );
};

export default Game;
