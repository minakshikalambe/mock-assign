import { useState } from 'react'
import './App.css'
import Ad from './component/form'
import Car from './component/show'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Navbar from './component/Navbar'
import CarDetails from './component/cardetail'
function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Car/>}/>
        <Route path="/Add" element={<Ad/>}/>
        <Route path="/car/:id" element={<CarDetails/>}/>
     </Routes>
     </Router>
    </div>
  )
}

export default App
