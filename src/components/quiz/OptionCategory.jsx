import React from 'react'

const OptionCategory = ({
  quizType,
  handleChangeCategory
}) => {
  return (
    <div>
      <select
        id="categoryName"
        value={quizType}
        label="Quiz Category"
        onChange={handleChangeCategory}
      >
        <option disabled selected defaultValue='name'>Name of Category</option>
        <option value={9}>General knowledge</option>
        <option value={10}>Entertaiment: Books</option>
        <option value={11}>Entertaiment: Film</option>
        <option value={12}>Entertaiment: Music</option>
        <option value={13}>Entertaiment: Musical and Theatres</option>
        <option value={14}>Entertaiment: Television</option>
        <option value={15}>Entertaiment: Board Games</option>
    </select>
  </div>
  )
}

export default OptionCategory