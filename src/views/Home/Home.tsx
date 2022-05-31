import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/random"><button>Random photo</button></Link>
        <Link to="/gallery"><button>Gallery</button></Link>
    </div>
  )
}

export default Home