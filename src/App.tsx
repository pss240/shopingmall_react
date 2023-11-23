import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {Outlet, Route, Routes} from 'react-router-dom';
import MainPage from './pages/Mainpage';
import DetailPage from './pages/DetailPage';
import CarryPage from './pages/CarryPage';
import LoginPage from './pages/LoginPage';

const Layout =() =>{
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>

    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='detail' element={<DetailPage/>}/>
          <Route path='carryer' element={<CarryPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
