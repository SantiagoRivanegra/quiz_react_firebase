import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { database } from '../../firebase-config'
import { getDocs, collection } from 'firebase/firestore'

const Results = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [finalResult, setFinalResult] = useState(0)
  const databaseref = collection(database, 'Leader Board')
  const [leaderBoardData, setLeaderBoardData] = useState([])

  useEffect(() => {
    if(state){
      const { finalResult } = state
      setFinalResult(finalResult)
    }
    getData()
  }, [])

  const getData = async () => {
    const data = await getDocs(databaseref)
    setLeaderBoardData(
      data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      .sort((a, b) => parseFloat(b.finalScore) - parseFloat(a.finalScore))
      )
  }

  const playAgain = () => {
    navigate('/quiz')
  }

  return (
    <div>
      {finalResult ? (
        <h2>Final Score: {finalResult}</h2>
      ) : (
        ''
      )}

      <button
        onClick={playAgain}
      >
        Play Again
      </button>

      <h2>Leader Board: </h2>
      <table className="table-auto border-separate border border-slate-500 m-4">
      <thead className="m-4">
          <tr>
            <th>userName</th>
            <th>Difficulty</th>
            <th>Final Score</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
        {leaderBoardData.map((person) => {
          return(
          <tr>
            <td>{person.playerName}</td>
            <td>{person.difficulty}</td>
            <td>{person.finalScore}</td>
            <td>{person.category}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Results