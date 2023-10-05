import React from 'react';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import ProductPage from './Pages/ProductPage';
import Register from './Pages/Register';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  const user = true
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path= '/cart' element={<Cart />}/>
          <Route path= '/login' element={user ? <Navigate to='/' replace /> :<Login />}/>
          <Route path= '/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
