
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {  Route, Routes } from 'react-router-dom'
import Products from './Component/Products';
import Login from './Component/Login';
import Register from './Component/Register';
import Product from './Component/Product';
import Cart from './Component/Cart';

function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/products' Component={Products}/>
      <Route exact path='/register' Component={Register}/>
      <Route path='/products/:id' Component={Product}/>
      <Route exact path='/login' Component={Login}/>
      <Route path='/cart' Component={Cart}/>
    </Routes>
    </>
  );
}

export default App;
