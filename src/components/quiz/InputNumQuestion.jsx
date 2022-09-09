import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputNumQuestion = ({
  num,
  setNum
}) => {

  const handleChangeNumQuestions = (e)=> {
    console.log(e.target.value)
    if(e.target.value < 5 || e.target.value >50){
      toast.error('Insert number between 5 and 50', {
        position: "top-right",
        autoClose: 300,
        pauseOnHover: false,
      })
    } else {
      console.log(e.target.value + 'setNUm')
      setNum(e.target.value)
    }
  }

  return (
    <div>
      <ToastContainer />
      <input
        className="border border-black" 
        placeholder="Number of Questions"
        type='number'
        value = {num}
        onChange={handleChangeNumQuestions}
      />

      <button 
        className="btn btn-primary rounded-[100%] border border-black ml-4"
        data-bs-toggle="tooltip" data-bs-placement="right" 
        title="Between 5 & 50"
      >
           i
      </button>
    </div>
  )
}

export default InputNumQuestion