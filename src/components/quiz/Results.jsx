import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Results = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [finalResult, setFinalResult] = useState(0)

  useEffect(() => {
    const { finalResult } = state
    setFinalResult(finalResult)
  }, [])

  const playAgain = () => {
    navigate('/quiz')
  }

  return (
    <div>
      <h2>Final Score: {finalResult}</h2>

      <button
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>
  )
}

export default Results