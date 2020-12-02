import React from 'react';
import Navigation from '../../layouts/Navigation/Navigation';
import './Employees.css'


function Employees(props) {
  return (
    <Navigation handleLogout={props.handleLogout}/>
  );
}

export default Employees;