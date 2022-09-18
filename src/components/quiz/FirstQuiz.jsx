import React, { useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import OpctionCategory from './OptionCategory'
import InputNumQuestion from './InputNumQuestion'
import OpctionDifficulty from './OptionDifficulty'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FirstQuiz = () => {
  const navigate = useNavigate()
  const [quizType, setQuizType] = useState('')
  const [num, setNum] = useState(10);
  const [quizDiff, setQuizDiff] = useState('')
  const [quizArray, setQuizArray] = useState([])
  const [playerName, setPlayerName] = useState('')

  const handleChangeCategory = (e)=> {
    console.log(e.target.value)
    setQuizType(e.target.value)
  }

  const getPlayerName = (value) => {
    setPlayerName(value)
    localStorage.setItem('Playername', value)
    }

  const getQuiz = ()=> {
    if(!quizDiff){
      toast.error("Insert difficulty", {
        position: "top-right",
        autoClose: 1000,
        pauseOnHover: false,
      })
    }
    if(!playerName){
      toast.error("Please Fill the Player's Name", {
        position: "top-right",
        autoClose: 1000,
        pauseOnHover: false,
      })
    }
    if(!quizType){
      toast.error("Insert category", {
        position: "top-right",
        autoClose: 1000,
        pauseOnHover: false,
      })
    }
    if(playerName && quizType && quizDiff){
    axios.get(`https://opentdb.com/api.php?amount=${num}&difficulty=${quizDiff}&category=${quizType}`)
    .then((response) => {
      setQuizArray(response.data.results)
      navigate('/quiz/play',
          {
            state: {
              quizData: response.data.results,
              quizCount: num,
              quizType: quizType,
              quizDiff: quizDiff
            }
          })
    })
  }
  }

  return (
    <Fragment>
    <Helmet>
      <title>
          FirstQuiz       
      </title>
    </Helmet>
    <div className="bg-slate-700 h-[100vh] text-center">
      <ToastContainer />
      <h1 className="italic hover:not-italic text-center text-8xl mb-6">FirstQuiz</h1>

      <section className="flex flex-col w-auto items-center">

      <input 
        className="border-solid border-2 border-zinc-400 bg-slate-500 text-slate-900 hover:bg-slate-600 font-bold placeholder:text-slate-900 placeholder:italic mb-4"
        placeholder="PlayerName..."
        type='text'
        onChange={(e) => getPlayerName(e.target.value)}
        value = {playerName}
      />

        <InputNumQuestion
          num={num}
          setNum={setNum}
        />
        
        <OpctionCategory 
          quizType={quizType}
          handleChangeCategory={handleChangeCategory}
        />
        
        <OpctionDifficulty 
          quizDiff={quizDiff}
          setQuizDiff={setQuizDiff}
        />

        <div>
          <button 
            className="btn btn-primary border-solid border-2 border-zinc-400 w-[200px] bg-[#243B55] hover:bg-[#2c3e50] m-4 font-semibold"
            onClick={getQuiz}  
          >GET QUIZ
          </button>

          <button 
            className="btn btn-primary border-solid border-2 border-zinc-400 w-[200px] bg-zinc-500 m-4 font-semibold hover:bg-zinc-600"
            onClick={() => navigate('/quiz/results')}  
          >CHECK LEADER BOARD
          </button>
        </div>
      </section>
    </div>
    </Fragment>
  )
}

export default FirstQuiz