import React from 'react';
import LogEntry from '../LogEntry/LogEntry';

function LogHeadings(props) {
  const { title } = props
  const heading = {
    day: () => {
      let day;
      switch (new Date(title).getDay()) {
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
    date: () => new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(title))
  }


  return (
    <div style={{background:'#ccc', height:'25px'}}>
        <div className='flex-row space-btw align-rw-cntr'style={{padding:'0 0 0 10px', height:'25px'}}>
          <h5 style={{fontSize:'14px'}}className="margin-0">{heading.day()}, {heading.date()}</h5>
          <button className='button-7'>New Entry</button>
        </div>
    </div>
  );
}

export default LogHeadings;