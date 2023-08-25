import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesRoot from './routes/Routes';
import { useLocation, useParams } from 'react-router';

function App() {
  const currentLoaction = useLocation()
  useEffect(() => {
    console.log(currentLoaction)
  })
  return (
    <div className="App">


      <RoutesRoot />


    </div>
  );
}

export default App;
