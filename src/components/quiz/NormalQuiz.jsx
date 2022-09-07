import React, { useEffect } from 'react'
import { getWebQuiz } from '../../redux/actions/index'
import { useDispatch, useSelector } from "react-redux"


const NormalQuiz = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWebQuiz())
  },[])

  return (
    <div>NormalQuiz</div>
  )
}

export default NormalQuiz