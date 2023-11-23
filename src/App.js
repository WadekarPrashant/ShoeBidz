import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home" ;
import Checkout from "./Checkout";

// import { BrowserRouter as Router, Switch, Route }
// from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    // following BEM convention
<Router>
      {/* <Link to='/Home'></Link> */}

      <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Home />
        </>
      } />
      
      <Route path='/checkout' element={<Checkout/>} />
      {/* <Route path='/' element={<Header/>} /> */}
    
      </Routes>
      </Router>

    /*
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
          <Header />
          <Home />
          </Route>
        </Switch>
    </div>
    </Router>
    */
  );
}

export default App;
