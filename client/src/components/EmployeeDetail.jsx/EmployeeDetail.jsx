import React, { useEffect, useState } from 'react';
import './EmployeeDetail.css'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TodayIcon from '@material-ui/icons/Today';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import WorkIcon from '@material-ui/icons/Work';

function EmployeeDetail(props) {
  const { employee, points} = props
  const [zone, setZone] = useState(false);
  const [lastSub, setLastSub] = useState({
    date: null,
    id: null
  });
  
  
  
  useEffect(() => {
    const zoneStatus = () => {
      if (points >= 36) {
          setZone("Termination")
          return zone
        } else if (points >= 30) {
          setZone("Final Warning")
          return zone
        } else if (points >= 24) {
          setZone("Written Warning")
          return zone
        } else if (points >= 18) {
          setZone("Verbal Warning")
          return zone
        } else {
          return null
        }
    }
    const lastSubmission = () => {
      if (employee.infractions) {
        let infractions = employee.infractions.map((item) => { return { date: item.date, id: item.id } })
        console.log('infractions', infractions)
        let sortedInfractions = infractions.sort((a, b) => new Date(b.date) - new Date(a.date))
        console.log('sorted', sortedInfractions)
        let lastInfraction = sortedInfractions[0]
        setLastSub(prevState => ({ ...prevState, date: lastInfraction.date, id: lastInfraction.id }))
        return lastSub
      }
    }
    zoneStatus()
    lastSubmission()
  }, [points, zone])

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
        <p>Recent Entry: #{lastSub.id}, {lastSub.date} </p>
        <p>last documented</p>
        <p>Warning Status</p>
        <p>{ zone  ? `Zone: ${zone}` : null}</p>
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