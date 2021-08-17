import React from 'react';
import "./LogEntry.css"

function LogEntry(props) {
  const { log, handleSelect, modal, daily, entry} = props
  const createdAt = new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(log.created_at))
  
  
  const date = {
    day: () => {
      let day;
      console.log(daily)
      switch (new Date(log.date).getDay()) {
        case 0: day='MON'
          break;
        case 1: day='TUES'
          break;
        case 2: day='WED'
          break;
        case 3: day='THURS'
          break;
        case 4: day='FRI'
          break;
        case 5: day='SAT'
          break;
        case 6: day='SUN'
          break;
        default:
          day = "Error with Date Format"
      }
      return day
    },
    date: () => new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(log.date.replace(/-/g, '/').replace(/T.+/, '')))
  }
  

  return (
    <div style={{borderBottom: "solid 1px #ccc",}}>
        <div onClick={() => handleSelect(log)} className='flex-column'>
          <div style={{ paddingRight: '10px' }} className='flex-row space-btw align-rw-cntr title-pairings'>
            <h4 style={{ margin: '10px', fontSize: '12px' }}>{log.employee_id}</h4>
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