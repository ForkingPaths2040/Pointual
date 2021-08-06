import React, {useState, useEffect} from 'react';
import './Logs.css'
import { getAllInfractions } from '../../services/infractions';

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
    <div>
      {logs.map((obj, index) => {
        return <div style={{ border: "solid 1px black" }} key={index}>
          {obj.date}
          {obj.id}
          {obj.attendance}
          {obj.points}
          </div>
      })}
    </div>
  );
}

export default Logs;