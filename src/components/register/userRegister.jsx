import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRegister = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target:{ name, value }}) =>  setUser({ ...user, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try { 
        await signup(user.email, user.password);
        navigate('/')
    } catch(error) {
      console.log(error.code)
      if(error.code === "auth/invalid-email"){
        toast.info('Invalid Email', {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        })
        setError('Invalid Email');
      }
      if(error.code === "auth/email-already-in-use"){
        toast.info('Email in Use', {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        })
        setError('Email in Use');
      }
      if(error.code === "auth/weak-password"){
        toast.info('Weak Password', {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        })
        setError('Weak Password');
      }
      if(error.code === "auth/weak-password"){
        toast.info('At least 6 characters', {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        })
        setError('Weak Password');
      }
    }
  }

  return (
    <div className=" flex flex-col bg-slate-700 h-[100vh] text-center">
      
      <ToastContainer />
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input 
          className="bg-slate-400 font-black font-medium placeholder:text-slate-700" 
          type="email" 
          name="email" 
          placeholder="youremail@example.com" 
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input 
          className="bg-slate-400 font-black font-medium placeholder:text-slate-700" 
          type="password" 
          name="password" 
          id="password"
          placeholder="******" 
          onChange={handleChange}
        />
        <button>
          Register
        </button>
      </form>
    </div>
  )
}

export default UserRegister