import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

import answer from '../../assets/img/answer.png'
import options from '../../assets/img/options.png'
import fiftyFifty from '../../assets/img/fiftyFifty.png'
import hints from '../../assets/img/hints.png'

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home | Quiz App</title>
      </Helmet>
      <div>
        <Navbar />
        <h1>How to Play the Game</h1>
        <p>Ensure you read this guide from start to finish.</p>
        <ul>
          <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
          <li>Each game consists of 15 questions.</li>
          <li>
              Every question contains 4 options.
              <img src={options} alt="Insatquiz options example"/>
          </li>
          <li>
              Select the option which best answers the question by clicking (or selecting) it.
              <img src={answer} alt="Insatquiz answer example"/>
          </li>
          <li>
              Each game has 2 lifelines namely:
              <ol type="circle" id="sublist">
                  <li>2 50-50 chances</li>
                  <li>5 Hints</li>
              </ol>
          </li>
          <li>
              Selecting a 50-50 lifeline by clicking the icon <span></span> will remove 2 wrong answers, leaving the correct answer and one wrong answer.
              <img src={fiftyFifty} alt="Instaquiz 50-50 answer example"/>
          </li>
          <li>
              Using a hint by clicking the icon <span></span>will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as possible on a single question.
              <img src={hints} alt="Instaquiz hints example"/>
          </li>
          <li>Feel free to quit (or retire from) the game at any time. In that case your score will be revealed afterwards.</li>
          <li>The timer starts as soon as the game loads.</li>
          <li>Let's do this if you think you've got what it takes?</li>
        </ul>
        <div>
          <button className="border-[1px] border-black bg-red-800"><Link to="/">No take me back</Link></button>
          <button className="border-[1px] border-black bg-green-800"><Link to="/quiz/play">Okay, Let's do this!</Link></button>
        </div>
      </div>
    </Fragment>
  )
}
export default Home