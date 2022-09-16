import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target:{ name, value }}) =>  setUser({ ...user, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch(error) {
      setError(error.message);
    }
  }

  return (
    <div>
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
          Login
        </button>
      </form>
    </div>
  )
}

export default UserLogin