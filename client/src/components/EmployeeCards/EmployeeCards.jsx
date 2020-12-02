import React from 'react';
import { Link } from 'react-router-dom'
import './EmployeeCards.css'


function EmployeeCards(props) {
  
  return (
    <div className="employee-card">
    <Link className="card" to={`/employees/${props._id}`} style={{textDecoration: 'none', color: 'black'}}>
        <img className="employee-card-image" src={props.imgURL} alt={`${props.firstName} ${props.lastName}`} />
        <div className='employee-card-name'>{props.firstName} {props.lastName}</div>
        <div className='employee-card-position'>{props.position}</div>
        <div className='employee-card-points'>{props.points}</div>
    </Link>
  </div>
  );
}

export default EmployeeCards;