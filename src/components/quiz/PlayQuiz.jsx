import React, { useEffect, useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'

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
    <Fragment>
        <Helmet>
          <title>
              Play Quiz        
          </title>
        </Helmet>
    <div className="flex flex-col 
    bg-slate-700 h-[100vh] items-center">
      <h1 className="mb-6 text-4xl border-b border-slate-900 italic hover:not-italic">PlayQuiz</h1>
      <h2 className="mb-4 text-2xl font-semibold">Your Current Score: {result}</h2>
      <h2 className="mb-4 text-2xl font-semibold">Question Number: {questionCounter} of {totalQuiz}</h2>
      <h2 className="mb-4 text-2xl font-semibold">Difficulty Level: {quizDiff}</h2>

      <Card 
        questionsArray={questionsArray}
        questionCounter={questionCounter}
        nextQuestion={nextQuestion}
        setResult={setResult}
        result={result}
      />

      {questionCounter === Number(totalQuiz) ? (
        <button 
          className="cursor-pointer m-6 border bg-slate-500 text-slate-900 hover:bg-slate-600 w-40 font-semibold"
          onClick={submitQuiz}
        >SUBMIT</button>
      ) : (
        ""
      )}

    </div>
    </Fragment>
  )
}

export default PlayQuiz