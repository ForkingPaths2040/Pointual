import React, {useState, useEffect} from 'react';
import './Logs.css'
import { getAllInfractions } from '../../services/infractions';

function Logs(props) {
  const [logs, setLogs] = useState([]);
  const [sortedLogs, setSortedLogs] = useState();
  
  
  

  useEffect(() => {
    const fetchLogs = async () => {
      const resp = await getAllInfractions();
      setLogs(resp)
    }
    // const sortedbyDate = () => {
    //   let sorted = logs.sort((a, b) => new Date(b.date) - new Date(a.date))
    //   setSortedLogs(sorted)
    // }
    fetchLogs();
    // sortedbyDate();
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