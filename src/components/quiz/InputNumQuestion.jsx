import React from 'react'

const InputNumQuestion = ({
  setNum,
  handleChangeNumQuestions
}) => {
  return (
    <div>
      <input 
        placeholder="Number of Questions"
        type='number'
        value = {setNum}
        onChange={handleChangeNumQuestions}
      />
    </div>
  )
}

export default InputNumQuestion