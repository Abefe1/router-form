
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import { useState } from 'react'




function App() {
  const [page, setPage] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Nav setPage={setPage} page={page}></Nav>
        {
          page ? <LoginForm/> : ``
        }
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/services' element={<Services/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
