import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/random"><button>random photo</button></Link>
        <Link to="/list"><button>List</button></Link>
    </div>
  )
}

export default Home