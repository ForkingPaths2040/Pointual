import React from 'react';
import { Link } from 'react-router-dom';

function SelectedEntry(props) {
  const { entry, employees } = props
  const createdAt = new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(entry.created_at))

  const record = employees.find((employee => employee.id === entry.employee_id))

  return (
    <div style={{border:'solid 1px #ccc', width: '85%', margin:'0 auto'}}>
      <div style={{background:'#ccc', height:'25px'}}>
        <div className='flex-row align-rw-cntr'style={{padding:'0 0 0 10px', height:'25px', justifyContent:'flex-end'}}>
          <button className='button-7'>Reply</button>
        </div>
        </div>
      <div style={{ paddingRight: '10px' }} className='flex-row space-btw align-rw-cntr title-pairings'>
        <Link to={`/employees/${record.id}`}>
          <h4 style={{ margin: '10px', fontSize: '12px' }}>{`${record?.first_name} ${record?.last_name}`}</h4>
        </Link>
          <p style={{ color: '#ccc' }}>Created { createdAt } CST</p>
        </div>
        <div className="title-pairings">
          <p>Attendance: {entry.attendance}</p>
          <p>Points: {entry.points}</p>
        </div>
        <p style={{padding:'10px', fontSize:'12px'}}>{entry.reason}</p>
    </div>
  );
}

export default SelectedEntry;