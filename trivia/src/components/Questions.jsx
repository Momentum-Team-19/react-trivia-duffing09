import React, {useEffect, useState} from 'react';
import axios from 'axios';



function Questions () {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((response) => setQuestions(response.data.results.question))
    }, []);
    console.log(response.data.results.question)


  return (
    <div>
      <h2>Question: {questions}</h2>
    </div>
  );
}

export default Questions