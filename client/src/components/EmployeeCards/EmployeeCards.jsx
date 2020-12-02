import React from 'react';
import { Link } from 'react-router-dom'
import './EmployeeCards.css'


function EmployeeCards(props) {
  
  return (
    <div className="employee-card">
    <Link className="employee-card-contents" to={`/employees/${props._id}`} style={{textDecoration: 'none', color: 'black'}}>
        <div className='employee-content-mask'>
        <img className="employee-content-image" src={props.imgURL} alt={`${props.firstName} ${props.lastName}`} />
        </div>
        <div className='employee-content-name'>{props.firstName} {props.lastName}</div>
        <div className='employee-content-position'>{props.position}</div>
        <div className='employee-content-points'>{props.points}</div>
    </Link>
  </div>
  );
}

export default EmployeeCards;