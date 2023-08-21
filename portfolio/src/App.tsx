import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SwipeableEdgeDrawer from './components/IndexComponent';
import RoutesRoot from './routes/Routes';
import { useLocation, useParams } from 'react-router';

function App() {
  const currentLoaction = useLocation()
  useEffect(() => {
    console.log(currentLoaction)
  })
  return (
    <div className="App">
      {
        currentLoaction.key !== "default" ?
          <SwipeableEdgeDrawer /> : ""
      }
      <RoutesRoot />
    </div>
  );
}

export default App;
