import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage';
//import NormalQuiz from './components/quiz/NormalQuiz'
import FirstQuiz from './components/quiz/FirstQuiz'
import PlayQuiz from './components/quiz/PlayQuiz.jsx'
import Results from './components/quiz/Results.jsx'

import { app } from './firebase-config'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/quiz" element={<FirstQuiz />}></Route>
          <Route path="/quiz/play" element={<PlayQuiz />}></Route>
          <Route path="/quiz/results" element={<Results />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
