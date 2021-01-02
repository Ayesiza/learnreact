import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
// import axios from 'axios';
import Register from './component/Register'
import Login from './component/Login'

function App() {
  return(
    <Router>
    <main className="">

    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <Link to="/" class="navbar-brand">MyPride</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">
        <Link to="/"class="nav-link" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to ="/Register" class="nav-link" >Register</Link>
      </li>
      <li class="nav-item">
        <Link to ="/Login" class="nav-link" >Login</Link>
      </li>
     
    </ul>
  </div>
</nav>
      
      <Switch>
       <Route path="/" exact  component={Home} />
       <Route  path="/Register" component ={Register}/>
       <Route  path="/Login" component={Login}/>
       </Switch>
    </main>
    </Router>

  );

}
const Home = () => (
  <Fragment>
    <h1>Welcome to my  First React Application</h1>
  </Fragment>
  );
export default App
