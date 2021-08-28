import React from 'react';
import { Link} from "react-router-dom";

function Navbar() {
    return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light navigationbar">
  <Link to="/" class="navbar-brand link-text" >MyGallery</Link>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">
        <Link to="/"class="nav-link link-text " >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to ="/Register" class="nav-link link-text" >Register</Link>
      </li>
      <li class="nav-item">
        <Link to ="/another" class="nav-link link-text" >Another</Link>
      </li>
      <li class="nav-item">
        <Link to ="/Login" class="nav-link link-text " >Login</Link>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
