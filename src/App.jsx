import { useState } from 'react'
import Header from './components/header'
import Home from './components/home'
import Buttons from './components/buttons'
import Navigation from './components/navigation'
import Footer from './components/footer'
import List from './components/list'
  import Table from './components/table'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='parent'>
      <Header/>
      <Navigation/>


         <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/table" element={<Table/>} />
      </Routes>
    

      <Footer/>
    </div>
  )
}

export default App
