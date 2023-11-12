
import NavBar from './components/NavBar';
import MainContainer from './container/MainContainer';
import './style.scss'
import UserContext from './context/UserContext';
import { useState } from 'react';

function App() {
  
  return (
    <>
    <NavBar />
    <MainContainer/>
    </>
  );
}

export default App;
