import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Video from './pages/Video/Video.jsx'
import { useState } from 'react'
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>npm
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
