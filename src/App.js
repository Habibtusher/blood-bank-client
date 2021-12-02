import React from 'react';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import NotFound from './Components/Pages/NotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Register from './Components/Athentication/Register/Register';
import Login from './Components/Athentication/Login/Login';
const App = ()=>{
    
    return(
        <Router>
            <Navbar></Navbar>
          <Switch>
           
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/register">
            <Register/>
            </Route>
            <Route path="/login">            
             <Login/>
            </Route>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route>
                <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
    )
}
export default App;