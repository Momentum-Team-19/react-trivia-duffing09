import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Categories from './components/Categories'
import Questions from './components/Questions'
import axios from 'axios';

function App() {
  const [categoryId, setCategoryId] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  return (
    <>
      <header>
        <p className='triviaHeader'>Trivia!</p>
      </header>
      {categoryId ? (
        <Questions setCategoryId={setCategoryId} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} />
        ) : (
        <Categories setCategoryId={setCategoryId} />
        )}
    </>
  );
}




export default App
// cateogories showing up done
// make a plan on what we're gonna build
// 
