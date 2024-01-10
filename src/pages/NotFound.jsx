import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
            <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        Not Found
      </div>
    </div>
  )
}

export default NotFound