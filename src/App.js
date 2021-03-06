import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Register from './component/Register'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Shop from './component/Shop';


function App() {
  return(
   
    <Router>
    <Fragment className="wrapper">

     <Navbar />
      <Switch>
       <Route path="/" exact  component={Home} />
       <Route  path="/Register" component ={Register}/>
       <Route  path="/Login" component={Login}/>
       </Switch>
       
    </Fragment>
    <Shop />
    </Router>
    

  );

}

export default App
