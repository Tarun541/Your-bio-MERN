import React, { createContext } from 'react'
import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './components/Home'
import Signin from './components/Signin'
import About from './components/About'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import Logout from './components/Logout'
import './index.css'

import { initialState, reducer } from './reducer/UseReducer'

export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (


    <>

      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Errorpage />} />

        </Routes>

      </UserContext.Provider>
    </>
  )
}

export default App;