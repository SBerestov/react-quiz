import React from 'react'
import './index.scss';
import questionsData from './questions.json';
import Game from './components/Game' 
import Result from './components/Result';
import StartScreen from './components/StartScreen';
import Header from './components/Header';

function App() {
  const [category, setCategory] = React.useState('');
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const questions = category ? questionsData[category] : [];

  const onClickVariant = (index) => {
    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setCategory('')
    setStep(0);
    setCorrect(0);
  };

  if (!category) {
    return (
      <>
        <Header />
        <div className='start-container'>
          <StartScreen onSelectCategory={setCategory} /> 
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="App">
        {step !== questions.length 
            ? <Game step={step} question={questions[step]} onClickVariant={onClickVariant} total={questions.length} /> 
            : <Result correct={correct} total={questions.length} onRetry={resetQuiz} />
        }
      </div>
    </>
  );
}

export default App;
