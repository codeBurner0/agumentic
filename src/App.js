import React from 'react'
import './App.css'
import Header from './Component/Header'
import { BrowserRouter } from 'react-router-dom'
import Jalditech from './Pages/Jalditech'
import Trello from './Pages/Trello'
import Footer from './Pages/Footer'
import Video from './Pages/Video'
function App() {
  return (
    <div className='body'>
      <BrowserRouter>
      <Header/>
      <Jalditech/>
      <Trello/>
      <Video/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
