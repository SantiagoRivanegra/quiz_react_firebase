import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/authContext'

const UserRegister = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({ target:{ name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input 
          className="bg-slate-700" 
          type="text" 
          name="email" 
          placeholder="youremail@example.com" 
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input 
          className="bg-slate-700" 
          type="password" 
          name="password" 
          id="password" 
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