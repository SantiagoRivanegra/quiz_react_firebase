import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OptionCategory = ({
  quizDiff,
  setQuizDiff
  // handleChangeCategory
}) => {

  const handleChangeDifficulty = (e)=> {
    console.log(e.target.value)
    if(e.target.value === undefined){
      toast.error('Insert number between 5 and 50', {
        position: "top-right",
        autoClose: 300,
        pauseOnHover: false,
      })
    } else {
      console.log(e.target.value + 'setQuizDiff')
      setQuizDiff(e.target.value)
    }
  }

  return (
    <div>
      <ToastContainer />
      <select
        className="border-solid border-2 border-zinc-400 bg-slate-500 text-slate-900 hover:bg-slate-600 font-bold mb-4"
        id="difficulty"
        value={quizDiff}
        label="Difficulty Level"
        onChange={handleChangeDifficulty}
      >
        <option hidden selected defaultValue='name'>Difficulty</option>
        <option disabled selected defaultValue='name'>Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>
  </div>
  )
}

export default OptionCategory