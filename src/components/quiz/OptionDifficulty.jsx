import React from 'react'

const OptionCategory = ({
  quizDiff,
  handleChangeCategory
}) => {
  return (
    <div>
      <select
        id="difficulty"
        value={quizDiff}
        label="Difficulty Level"
        onChange={handleChangeCategory}
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