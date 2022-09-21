import React, { useEffect, useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'
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
    <Fragment>
        <Helmet>
          <title>
              Leader board        
          </title>
        </Helmet>
    <div className="bg-slate-700 h-[100vh] text-center">

      <div className="flex flex-col relative">
        <h2 className="m-6 text-2xl border-b border-slate-900">Leader Board: </h2>

        {finalResult ? (
          <h2 className="ml-4 p-6 text-2xl border-slate-900">Final Score: {finalResult}</h2>
        ) : (
          ''
        )}

        <button
          className="cursor-pointer m-6 border bg-slate-500 text-slate-900 hover:bg-slate-600 w-40 font-semibold"
          onClick={playAgain}
        >
          Play Again
        </button>

      </div>
      <table className="table-auto border-separate border-4 border-slate-500 m-4 w-[900px] border-spacing-y-1 border-separate ">
      <thead>
          <tr>
            <th className="border-b border-black font-bold">User Name</th>
            <th className="border-b border-black font-bold">Difficulty</th>
            <th className="border-b border-black font-bold">Final Score</th>
            <th className="border-b border-black font-bold">Category</th>
          </tr>
        </thead>
        <tbody className="text-center">
        {leaderBoardData.map((person) => {
          return(
          <tr key={person.id}>
            <td className="border-b border-black font-semibold">{person.playerName}</td>
            <td className="border-b border-black font-semibold">{person.difficulty}</td>
            <td className="border-b border-black font-semibold">{person.finalScore}</td>
            <td className="border-b border-black font-semibold">{person.category}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    </Fragment>
  )
}

export default Results