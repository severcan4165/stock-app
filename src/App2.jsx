import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      )
    )

  return (
 
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

const Root = () => {
  return <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Outlet/>
      </div>
  
  </>
}


