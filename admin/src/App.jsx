import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import ADD from './pages/ADD/ADD';
import List from './pages/List/List';
import Order from './pages/Orders/Order';
import './App.css'; // Adding a new CSS file for layout styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Navigate to='/add' />} />
            <Route path='/add' element={<ADD url={url} />} />
            <Route path='/list' element={<List url={url} />} />
            <Route path='/orders' element={<Order url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
