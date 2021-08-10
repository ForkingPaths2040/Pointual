import React, {useState, useEffect} from 'react';
import './Logs.css'
import { getAllInfractions } from '../../services/infractions';
import LogEntry from '../../components/LogEntry/LogEntry';

function Logs(props) {
  const [logs, setLogs] = useState([]);
  
  
  

  useEffect(() => {
    const fetchLogs = async () => {
      const resp = await getAllInfractions();
      let sorted = resp.sort((a, b) => new Date(b.date) - new Date(a.date))
      setLogs(sorted)
    }
    fetchLogs();
  }, [])



  return (
    <div style={{width: '50%', borderRight: 'solid 1px #ccc', margin: '25px 0'}}>
      {logs.map((log, index) => {
        return <LogEntry key={index} log={log}/>
    
      })}
    </div>
  );
}

export default Logs;