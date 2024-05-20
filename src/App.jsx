import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/Placeorder/PlaceOrder.jsx'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App