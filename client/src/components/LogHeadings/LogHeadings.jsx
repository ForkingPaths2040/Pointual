import React, { useEffect, useState } from 'react';
import LogEntry from '../LogEntry/LogEntry';

function LogHeadings(props) {
  const { title, logs, handleSelect, employees } = props
  const [matched, setMatched] = useState([]);
  
  const heading = {
    day: () => {
      let day = new Date(title)
      let weekday = day.getDay()
      let options = {weekday : 'short'}
      day = new Intl.DateTimeFormat('en-US', options).format(day).toUpperCase()
      return day
    },
    date: () => new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(title))
  }

  useEffect(() => {
    const matchingLogs = () => {
      let arr = []
      logs.forEach((log, index) => {
        log.date = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(log.date))
        if (log.date === heading.date()) {
           arr.push(log)
        }
        setMatched(arr)
      })
    }
    matchingLogs()
  }, [logs])

  return (
    <div>
      <div style={{ borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc', width: '85%', margin: '0 auto' }} >
        <div className='flex-row space-btw align-rw-cntr'style={{padding:'0 0 0 10px', height:'25px', background:'#ccc',}}>
          <h5 style={{fontSize:'14px'}}className="margin-0">{heading.day()}, {heading.date()}</h5>
          <button className='button-7'>New Entry</button>
        </div>
      {matched && matched.length > 0 ?
          matched.map((log, index) => {
            return <LogEntry log={log} key={index} handleSelect={() => handleSelect(log)} employees={employees}/>
          })
          :
          <p onClick={() => handleSelect(false)}style={{ padding: '10px', fontSize: '12px', fontStyle: 'italic', margin: 0, cursor:'pointer' }}>No entries for this day.</p>
        }
      </div>    
    </div>
  );
}

export default LogHeadings;