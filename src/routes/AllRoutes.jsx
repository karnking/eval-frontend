import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Signup from './Signup'

const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
  </Routes>
}

export default AllRoutes