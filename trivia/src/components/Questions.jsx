import React, {useEffect, useState} from 'react';
import axios from 'axios';

function shuffleAnswers(answers) {
  const shuffledAnswers = [...answers];
  for (let i = shuffledAnswers.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i +1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }
  return shuffledAnswers
}

function Questions({setCategoryId, setCurrentQuestion, currentQuestion}) {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

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
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
  };

  // Check if questions is an array before mapping over it
  if (!Array.isArray(questions)) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      {questions.map((question, index) => {
        if (currentQuestion === index) {
          const shuffledAnswers = shuffleAnswers ([
            question.correct_answer,
            ...question.incorrect_answers,
          ]);

          return (
            <div key={index}>
              <h2>Question: {question.question}</h2>
              <p>Difficulty: {question.difficulty}</p>
              {shuffledAnswers.map((answer, answerIndex) => (
                <button key={answerIndex} onClick={() => handleAnswerClick(answer)}>
                  {answer}
                </button>
              ))}
              <p>{question.correct_answer}</p>
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