import { Routes,Route } from "react-router-dom"
import {useEffect} from 'react'
import Home from "./Home/Home"
import Nav from "./Nav/Nav"
import LeftNav from "./Nav/LeftNav"
import Chat from './Home/Chat'
import Man from './Category/Man'
import Lady from './Category/Lady'

function App() {
  useEffect(()=>{
localStorage.removeItem('search')
  },[])
  return (
    <>
    <Nav />
    <Chat />
    <LeftNav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/lady' element={<Lady />} />
      <Route path='/man' element={<Man />} />
    </Routes>
    </>
  )
}

export default App
