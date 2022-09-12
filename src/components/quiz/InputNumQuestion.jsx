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

  const info = () => {
    toast.info('Insert number between 5 and 50', {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: false,
    })
  }

  return (
    <div>
      <ToastContainer />
      <input
        className="border-solid border-2 border-zinc-400 bg-slate-500 text-slate-900 hover:bg-slate-600 font-bold mb-4" 
        placeholder="Number of Questions"
        type='number'
        value = {num}
        onChange={handleChangeNumQuestions}
      />

      <button 
        className="btn btn-primary rounded-[100%] border border-black ml-4"
        data-bs-toggle="tooltip" data-bs-placement="right" 
        title="Between 5 & 50"
        onClick={info}
      >
           i
      </button>
    </div>
  )
}

export default InputNumQuestion