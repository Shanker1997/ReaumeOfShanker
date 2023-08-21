import React from 'react';
import logo from './logo.svg';
import './App.css';
import SwipeableEdgeDrawer from './components/IndexComponent';
import RoutesRoot from './routes/Routes';

function App() {
  return (
    <div className="App">
      <SwipeableEdgeDrawer />
      <RoutesRoot />
    </div>
  );
}

export default App;
