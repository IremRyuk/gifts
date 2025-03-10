import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import Nav from "./Nav/Nav"
import LeftNav from "./Nav/LeftNav"
import Chat from './Home/Chat'

function App() {
  return (
    <>
    <Nav />
    <Chat />
    <LeftNav />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
