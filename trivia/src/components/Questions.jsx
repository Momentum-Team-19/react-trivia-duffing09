import React, {useEffect, useState} from 'react';
import axios from 'axios';
import he from 'he';


function shuffleAnswers(answers) {
  const shuffledAnswers = [...answers];
  for (let i = shuffledAnswers.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i +1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }
  return shuffledAnswers
}

function Questions({setCategoryId, setCurrentQuestion, currentQuestion}) {
  const [showCategories, setShowCategories] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0)

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((response) => {
        const { data } = response;
        // Check if the response has the expected structure
        if (data && data.results && Array.isArray(data.results)) {
          setQuestions(data.results); // Assign the entire results array to questions
        } else {
          console.error('Invalid response structure:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);


  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    const currentQuestionObj = questions[currentQuestion];
    let correct = false;
    if (selectedAnswer === currentQuestionObj.correct_answer) {
      setIsAnswerCorrect(true);
      setScore((prevScore) => prevScore + 1);
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      correct = true;
    } else {
      setIsAnswerCorrect(false);
      setWrongAnswers((prevWrongAnswers) => prevWrongAnswers + 1);
    }
    setResults((prevResults) => [
      ...prevResults,
      { question: currentQuestionObj.question, correct: correct }
    ]);
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    setSelectedAnswer(null);
  }

  const handleBackToCatClick = () => {
    setShowCategories(true);
  }

  if (currentQuestion === questions.length) {
    return (
      <div className="final-results">
        <h2>Quiz Completed</h2>
        <p>Your final score is: {score}/10</p>
        <h3>Results:</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <p>Question: {result.qustion}</p>
              <p>Correct: {result.correct ? 'Yes' : 'No'}</p>
            </li>
          )
          )}
        </ul>
        <button onClick={handleBackToCatClick}>Back to Categories</button>
      </div>
    )
  }

  // Check if questions is an array before mapping over it, if not it means api request hasn't completed yet
  if (!Array.isArray(questions)) {
    return <div>Loading...</div>;
  }

  return (
    // using a Fragment to group multiple elements without adding extra nodes to the dom
    <React.Fragment>
      {/* maps over question array, iterates over each question object in the array and provides anindex for each one */}
      {questions.map((question, index) => {
        // checks if current index in the questions array matches currentQuestion index
        if (currentQuestion === index) {
          // if condition is true, proceeds to shuffle answers for current question. calls shuffleAnswers function then passing in an array that includes correct answer and all incorrect ones
          const shuffledAnswers = shuffleAnswers ([
            question.correct_answer,
            ...question.incorrect_answers,
          ]);
// if current question, returns a div element with a unique key attribute set to index. used to efficiently update and manage list of questions
          return (
            <div key={index} className="question">
              {/* displaying question and difficulty */}
              <h2>Question: {he.decode(question.question)}</h2>
              <p>Difficulty: {question.difficulty}</p>
              {/* maps over shuffledAnswers and generates a set of buttons for each answer. each button has a key attribute set to answerIndex and an onClick that calls handleAnswerClick when answer is clicked */}
              {shuffledAnswers.map((answer, answerIndex) => (
                <button key={answerIndex} onClick={() => handleAnswerClick(answer)}>
                  {answer}
                </button>
              ))}
              {/* displays a submit button. button is disabled if selectedAnswer is null. uses handleSubmit function */}
              <div><button className="submit-button" disabled={!selectedAnswer} onClick={handleSubmit}>Submit</button></div>
              {/* displays a message if isAnswerCorrect is false */}
              {isAnswerCorrect === false && <p className="message">❌Wrong, do better on this one!❌</p>}
              <p>{question.correct_answer}</p>
              <p className="score">✅: {correctAnswers}</p>
              <p className="score">❌: {wrongAnswers}</p>
            </div>
          );
        }
        return null; // Return null for questions that are not the currentQuestion
      })}
    </React.Fragment>
  );
}

export default Questions;

// when click button update a state with the selection information