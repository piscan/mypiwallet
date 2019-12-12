import React from 'react';
import logo from '../../images/miwnew.png';
import { NavLink } from 'react-router-dom';


function Navigation() {

  const handlClick = () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('overlapMenu');

      });
    }
  }

  const handlMenuItemClick = () => {

  }


  return (<>

    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/" >
          <img src={logo} alt="logo" />
        </NavLink>

        <span role="button" className="navbar-burger burger  " aria-label="menu"
          aria-expanded="false" data-target="navbarBasicExample" onClick={handlClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="navbarBasicExample" aria-expanded="false" className="navbar-menu " role="menu" onClick={handlMenuItemClick} >
        <div className="navbar-start"  >
          <NavLink to="/" className="navbar-item">
            Home
            </NavLink>
          <NavLink to="/account" className="navbar-item " >
            Account
        </NavLink>

          <NavLink to="/wallet" className="navbar-item">
            Wallet
        </NavLink>

        </div>

        <div className="navbar-end" >
          <div className="navbar-item">

            <div className="navbar-item has-dropdown">
              <span href=" " className="navbar-link">
                English
              </span>
            </div>
            <a href="https://github.com/johnsavadkuhi/mypiwallet"
            target="_blank" rel="noopener noreferrer"
            className="button is-light" >

              <span className="icon is-large">
                <i className="fa fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </>)
}

export default Navigation; 
