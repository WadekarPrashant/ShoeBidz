import React from "react";
import './App.css';
import Header from './Header';

function App() {
  return (
    // following BEM convention
    <div className="App">
      <h1>Let's Build ShoeBidz</h1>
      {/* Header */}
      <Header />
      {/* Home */}
    </div>
  );
}

export default App;
