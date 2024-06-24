import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './QuestionHeaderCard.style';
import FloatButton from '../FloatButton';

const QuestionHeaderCard = ({current, onPress, theme = 'primary', correct}) => {
  const [btnTheme, setBtnTheme] = useState([
    'primary',
    'primary',
    'primary',
    'primary',
    'primary',
    'primary',
    'primary',
    'primary',
    'primary',
    'primary',
  ]);
  const [currentQuestion, setCurrentQuestion] = useState();

  React.useEffect(() => {
    setCurrentQuestion(current);
    if (current == 0) {
      const newTheme = [...btnTheme];
      newTheme[0] = 'current';
      setBtnTheme(newTheme);
      //   setBtnTheme(['primary', 'primary', 'primary']);
    } else if (current > 0 && current < 10) {
      const newTheme = [...btnTheme];
      if (correct[current - 1] == true) {
        newTheme[current - 1] = 'true';
      } else {
        newTheme[current - 1] = 'wrong';
      }

      newTheme[current] = 'current';
      setBtnTheme(newTheme);
    }
    // setBtnTheme(prevState => {
    //   const newState = [...prevState];
    //   newState[current - 1] = theme;
    //   return newState;
    // });
  }, [current, theme]);

  const handleTheme = index => {
    return btnTheme[index];
  };
  return (
    <View style={styles.container}>
      <FloatButton title="1" onPress={onPress} theme={handleTheme(0)} />
      <FloatButton title="2" onPress={onPress} theme={handleTheme(1)} />
      <FloatButton title="3" onPress={onPress} theme={handleTheme(2)} />
      <FloatButton title="4" onPress={onPress} theme={handleTheme(3)} />
      <FloatButton title="5" onPress={onPress} theme={handleTheme(4)} />
      <FloatButton title="6" onPress={onPress} theme={handleTheme(5)} />
      <FloatButton title="7" onPress={onPress} theme={handleTheme(6)} />
      <FloatButton title="8" onPress={onPress} theme={handleTheme(7)} />
      <FloatButton title="9" onPress={onPress} theme={handleTheme(8)} />
      <FloatButton title="10" onPress={onPress} theme={handleTheme(9)} />
    </View>
  );
};

export default QuestionHeaderCard;
