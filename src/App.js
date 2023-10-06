import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home" ;

function App() {
  return (
    // following BEM convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
