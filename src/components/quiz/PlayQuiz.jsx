import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import Card from '../cardQuestion/Card'

import { database } from '../../firebase-config'
import { addDoc, collection } from 'firebase/firestore'

const PlayQuiz = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [questionCounter, setQuestionCounter] = useState(1)
  const [totalQuiz, setTotalQuiz] = useState(1)
  const [questionsArray, setQuestionsArray] = useState([])
  const [quizType, setQuizType] = useState('')
  const [quizDiff, setQuizDiff] = useState('')
  const [result, setResult] = useState(0)
  const [playerName, setPlayerName] = useState('')
  const databaseref = collection(database, 'Leader Board')


  useEffect(() => {
    const { quizData, quizCount, quizType, quizDiff } = state
    setQuestionsArray(quizData)
    setTotalQuiz(quizCount)
    setQuizDiff(quizDiff)
    setQuizType(quizType)
    setPlayerName(localStorage.getItem('Playername'))
  }, [])

  // const prevQuestion = () => {
  //   if(questionCounter > 1){
  //     setQuestionCounter(questionCounter - 1)
  //   }
  // }

  const nextQuestion = () => {
    if(questionCounter < totalQuiz){
      setQuestionCounter(questionCounter + 1)
    }
  }

  const submitQuiz = () => {
    addDoc(databaseref, {
      playerName: playerName,
      difficulty: quizDiff,
      category: questionsArray[0].category,
      finalScore: result
    })
    .then(() => {
      navigate('/quiz/results', {
        state: {
          finalResult: result,
        }
      })
    })
  }

  return (
    <div>
      <h1 className="text-center text-4xl border border-b italic hover:not-italic">PlayQuiz</h1>
      <h1>Your Current Score: {result}</h1>
      <h2>Question Number: {questionCounter} of {totalQuiz}</h2>
      <h3>Difficulty Level: {quizDiff}</h3>

      <Card 
        questionsArray={questionsArray}
        questionCounter={questionCounter}
        nextQuestion={nextQuestion}
        setResult={setResult}
        result={result}
      />

      {questionCounter === Number(totalQuiz) ? (
        <button 
          className="btn btn-primary w-[200px] bg-sky-500"
          onClick={submitQuiz}
        >SUBMIT</button>
      ) : (
        ""
      )}

    </div>
  )
}

export default PlayQuiz