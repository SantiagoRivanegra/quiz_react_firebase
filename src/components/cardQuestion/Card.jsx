import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({
  questionCounter,
  questionsArray,
  nextQuestion,
  setResult,
  result
}) => {

  const handleOption = (option) => {
    let correctAnswer = (questionsArray[questionCounter-1].correct_answer)

    if((correctAnswer) === option){      
      toast.success('Right answer', {
        position: "top-right",
        autoClose: 300,
      })
      setResult(result + 1)
    } else {
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
    <div className="text-center">
      {questionsArray.length >= 1 ? (
        <section>
          <h2 className="text-left mb-4 text-2xl font-semibold">Category: {questionsArray[questionCounter - 1].category}</h2>      
          
          <h2 className="font-bold">Question: {questionsArray[questionCounter - 1].question}</h2>
          {[
            ...questionsArray[questionCounter-1].incorrect_answers,
            questionsArray[questionCounter-1].correct_answer
            ].map((options,i) => {
              return (
                <div 
                  className="border-dashed border-2 border-slate-900 rounded-xl text-center m-[5px] hover:bg-slate-500 cursor-pointer font-semibold w-[500px]"
                  key={i}
                  onClick={() => handleOption(options)}                
                >
                <ToastContainer />
                <button
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
)}

export default Card