import React from 'react';
import { Link } from 'react-router-dom'
import "./LogEntry.css"

function LogEntry(props) {
  const { log, handleSelect, employees} = props
  const createdAt = new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(log.created_at))
  
 
  const record = employees.find((employee => employee.id === log.employee_id))
    
  
  

  return (
    <div style={{borderBottom: "solid 1px #ccc", cursor:'pointer'}}>
        <div onClick={() => handleSelect(log)} className='flex-column'>
        <div style={{ paddingRight: '10px' }} className='flex-row space-btw align-rw-cntr title-pairings'>
          <Link to={`/employees/${record?.id}`}>
            <h4 style={{ margin: '10px', fontSize: '12px' }}>{`${record?.first_name} ${record?.last_name}`}</h4>
          </Link>
            <p style={{ color: '#ccc' }}>Created {createdAt} CST</p>
          </div>
          <div className="title-pairings">
            <p>Attendance: {log.attendance}</p>
            <p>Points: {log.points}</p>
          </div>
          <p style={{ padding: '10px', fontSize: '12px' }}>{log.reason}</p>
        </div>
      </div>
  );
}

export default LogEntry;