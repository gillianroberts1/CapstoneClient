
import { Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContainer from './container/MainContainer';
import './style.scss'
import UserContext from './context/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
    <NavBar />
    <MainContainer/>
    </UserContext.Provider>
  );
}

export default App;
