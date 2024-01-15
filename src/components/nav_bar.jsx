
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom';

export default function Nav_bar({title,name1,name2,ruta} )  {
  return (
<div className="nav_bar">
  <div className='row'> 
  <div className='col'> 
<header> 
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " style={{padding:1+"%"}}>
  <h1 className='navbar-brand'>   <a className="navbar-brand" href="#">{title}</a></h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <ul class="nav justify-content-end  position-fixed  end-0 ">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to={'/'+ruta}>{name1}</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">{name2}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
</nav>
</header>
</div>
</div>
</div>
  );
}

