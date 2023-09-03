import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Home from './pagas/Home'
import Signup from './pagas/Signup'
import { Route ,Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    
<Home/>
{/* <Routes>
      <Route path='/' element={<Signup/>}/>
</Routes> */}
    </>
  )
}

export default App
