import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
  return (
    <div className='nav-container'>
      <h1 className='extra-bold' id='logo2'>Pointual.</h1>
      {
        props.currentUser ?
          <ul className='nav-items'>
            <Link to='/employees'><li>Employees</li></Link>
            <Link to='/employees'><li>Zones</li></Link>
            <Link to='/employees'><li>Logs</li></Link>
            <Link to='/employees'><li>Status</li></Link>
            <li><button className='button-2' onClick={props.handleLogout}>Logout</button></li>
          </ul>
          :
          null
      }
    </div>
  );
}

export default Header;