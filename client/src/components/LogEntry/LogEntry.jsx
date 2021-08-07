import React from 'react';
import "./LogEntry.css"

function LogEntry(props) {
  const { log } = props
  return (
    <div style={{borderBottom: "solid 1px black"}}>
      <div>
        <h2>{log.date}</h2>
        <button>New Entry</button>
      </div>
      <div>
        <h4>{log.employee_id}</h4>
        <h5>{log.attendance}</h5>
        <h6>{log.points}</h6>
        <p>{log.reason}</p>
      </div>
    </div>
  );
}

export default LogEntry;