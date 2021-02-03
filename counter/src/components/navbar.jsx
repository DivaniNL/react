import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {

  console.log('navbar rendered');
  return ( 
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://www.google.nl">
        Aantal verschillende producten:  <span className="badge oki badge-pill badge-secondary">{totalCounters}</span>
      </a>
      <h1 className='titlenav'>Het Online Boodschappenlijstje</h1>
    </nav> 
);
}

// class NavBar extends Component {
//     render() { 
        
//     }
// }
 
export default NavBar;