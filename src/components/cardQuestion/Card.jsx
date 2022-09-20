import React, { useRef, Fragment } from 'react'
import { Helmet } from 'react-helmet'

import correctSound from '../../assets/sounds/correct-answer.mp3'
import wrongSound from '../../assets/sounds/wrong-answer.mp3'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({
  questionCounter,
  questionsArray,
  nextQuestion,
  setResult,
  result
}) => {
  const ref = useRef()

  const handleOption = (option) => {
    let correctAnswer = (questionsArray[questionCounter-1].correct_answer)

    if((correctAnswer) === option){ 
      document.getElementById('correct-sound').play()     
      toast.success('Right answer', {
        position: "top-right",
        autoClose: 300,
      })
      setResult(result + 1)
    } else {
      document.getElementById('wrong-sound').play()   
      toast.error('Wrong answer', {
        position: "top-right",
        autoClose: 300,
      })
      if(result > 0 ) setResult(result - 1)
    }
    nextQuestion()
  }

  console.log(questionsArray[questionCounter - 1])
  return (
    <Fragment>
      <Fragment>
        <audio id="correct-sound" src={correctSound}></audio>
        <audio id="wrong-sound" src={wrongSound}></audio>
      </Fragment>
    <div className="text-center">
      {questionsArray.length >= 1 ? (
        <section>
          <h2 className="text-left mb-4 text-2xl font-semibold">Category: {questionsArray[questionCounter - 1].category}</h2>      
          
          <h2 className="items-center font-bold">Question: {questionsArray[questionCounter - 1].question}</h2>
          {[
            ...questionsArray[questionCounter-1].incorrect_answers,
            questionsArray[questionCounter-1].correct_answer
            ].map((options,i) => {
              return (
                <div 
                className="flex flex-col border-dashed border-2 border-slate-900 rounded-xl text-center m-[5px] hover:bg-slate-500 cursor-pointer font-semibold w-[500px]"
                key={i}                
                >
                <ToastContainer />
                <button
                  className="items-center"
                  onClick={() => handleOption(options)}
                  >
                  {options}
                </button>
                </div>
              )
            })}
        </section>
      ) : (
        console.log("No data")
        )}
      
    </div>
    </Fragment>
)}

export default Card