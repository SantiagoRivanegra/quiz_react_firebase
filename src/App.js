import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage';
//import NormalQuiz from './components/quiz/NormalQuiz'
import FirstQuiz from './components/quiz/FirstQuiz'
import PlayQuiz from './components/quiz/PlayQuiz.jsx'
import Results from './components/quiz/Results.jsx'
import UserRegister from './components/register/userRegister'

import { AuthProvider } from './components/context/authContext'

import { app } from './firebase-config'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/signup" element={<UserRegister />}></Route>
            <Route path="/quiz" element={<FirstQuiz />}></Route>
            <Route path="/quiz/play" element={<PlayQuiz />}></Route>
            <Route path="/quiz/results" element={<Results />}></Route>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
