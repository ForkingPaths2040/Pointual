import React from 'react';
import './EmployeeDetail.css'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TodayIcon from '@material-ui/icons/Today';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import WorkIcon from '@material-ui/icons/Work';

function EmployeeDetail(props) {
  const { employee, points} = props
  console.log()



  return (
    <div className="employee-detail-container">
      <div className='employee-image-container'>
        <div className='detail-mask'>
          <img className='detail-image' src={employee.img_URL} alt={`${employee.first_name} ${employee.last_name}`} />
        </div>
        <p className='detail-name'>{employee.first_name} {employee.last_name}</p>
        <p className='detail-points'>{points} points</p>
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
          <MailIcon />
          <PhoneIphoneIcon />
          <WorkIcon />
          <TodayIcon />
          <HourglassEmptyIcon />
        </div>
        <div className='data-details'>
          <p id="email">{employee.email}</p>
          <p>{employee.phone_number}</p>
          <p>{employee.position}</p>
          <p>{employee.hire_date}</p>
          <p>{employee.tenure} days</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;