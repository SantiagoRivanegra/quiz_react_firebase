import React, { useState } from 'react'
import OpctionCategory from './OptionCategory'
import InputNumQuestion from './InputNumQuestion'
import OpctionDifficulty from './OptionDifficulty'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FirstQuiz = () => {
  const navigate = useNavigate()
  const [quizType, setQuizType] = useState('')
  const [num, setNum] = useState(10);
  const [quizDiff, setQuizDiff] = useState('')
  const [quizArray, setQuizArray] = useState([])

  const handleChangeCategory = (e)=> {
    console.log(e.target.value)
    setQuizType(e.target.value)
  }

  const handleChangeNumQuestions = (e)=> {
    console.log(e.target.value)
    setNum(e.target.value)
  }

  const handleChangeDifficulty = (e)=> {
    console.log(e.target.value)
    setQuizDiff(e.target.value)
  }

  const getQuiz = ()=> {
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

  return (
    <div>
      <h1 className="italic hover:not-italic text-center">FirstQuiz</h1>

      <section className="flex flex-col w-auto items-center">

        <InputNumQuestion
          num={num}
          handleChangeNumQuestions={handleChangeNumQuestions}
        />
        
        <OpctionCategory 
          quizType={quizType}
          handleChangeCategory={handleChangeCategory}
        />
        
        <OpctionDifficulty 
          quizDiff={quizDiff}
          handleChangeCategory={handleChangeDifficulty}
        />

        <button 
          className="btn btn-primary w-[200px] bg-red-200 "
          data-bs-toggle="tooltip" data-bs-placement="bottom" 
          title="Play"
          onClick={getQuiz}  
        >GET QUIZ</button>
      </section>
    </div>
  )
}

export default FirstQuiz