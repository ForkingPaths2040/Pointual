import React from 'react';
import './EmployeeDetail.css'

function EmployeeDetail(props) {
  const {employee} = props
  return (
    <div className="employee-detail-container">
      <div className='employee-image-container'>
        <div className='detail-mask'>
          <img className='detail-image' src={employee.img_URL} alt={`${employee.first_name} ${employee.last_name}`} />
        </div>
        <p className='detail-name'>{employee.first_name} {employee.last_name}</p>
        <p className='detail-points'>{employee.points} points</p>
      </div>
      <hr className="line-break-1"/>
      <div className='employee-stats-container'>
        <p>last submitted</p>
        <p>last documented</p>
        <p>Warning Status</p>
        <p>Zone Status</p>
      </div>
      <hr className="line-break-1"/>
      <div className='employee-data-container'>
        <div className='data-icons'>

        </div>
        <div className='data-details'>
          <p>{employee.email}</p>
          <p>{employee.phone_number}</p>
          <p>{employee.position}</p>
          <p>{employee.hire_date}</p>
          <p>{employee.tenure}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;