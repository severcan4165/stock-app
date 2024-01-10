import React from 'react'
import {

    Link,
    Outlet

  } from "react-router-dom";

const Root = () => {
  return (
    <>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Outlet />
      </div></>
  )
}

export default Root