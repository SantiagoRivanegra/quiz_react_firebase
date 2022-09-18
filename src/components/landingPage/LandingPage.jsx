import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { HiOutlineCube } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const LandingPage = () => {

  return (
      <Fragment>
        <Helmet>
          <title>
              Welcome to Quiz App        
          </title>
        </Helmet>
        <div className="bg-origin-border h-screen w-screen bg-bg-landing bg-cover bg-no-repeat bg-center flex items-center justify-around">
          <section className="bg-gray-500/50 h-[80%] w-[35%] pl-8 pr-8">
            <div className="flex justify-center">
              <span><HiOutlineCube className="text-9xl"/></span>
            </div>
            <h1 className="text-center font-semibold text-blue-900 text-5xl">Quiz App</h1>
            <div className="w-[100%]">
              {/* <Link to='/home'> */}
              <Link to='/quiz'>
                <button 
                  className="btn btn-primary border-[1px] border-black bg-green-800 rounded-[30px] cursor-pointer p-4 block text-center transition-3000 ease-linear w-[100%] hover:bg-green-900"
                >Play</button>
              </Link>
            </div>
          </section>
        </div>
    </Fragment>
  )
}

export default LandingPage