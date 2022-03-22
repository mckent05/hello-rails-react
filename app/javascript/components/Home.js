import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome, Click <Link to='/greeting'>here</Link> to see a greeting!</h2>
    </div>
  )
}

export default Home