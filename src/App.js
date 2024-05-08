import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {
  return (
    
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;
