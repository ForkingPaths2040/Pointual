import React, {useState, useEffect} from 'react';
import './Logs.css'
import { getAllInfractions } from '../../services/infractions';
import LogEntry from '../../components/LogEntry/LogEntry';
import LogHeadings from '../../components/LogHeadings/LogHeadings';

function Logs(props) {
  const [logs, setLogs] = useState([]);
  const [range, setRange] = useState([]);
  
  useEffect(() => {
    const fetchLogs = async () => {
      const resp = await getAllInfractions();
      let sorted = resp.sort((a, b) => new Date(b.date) - new Date(a.date))
      setLogs(sorted)
    }
    fetchLogs();
  }, [])

  useEffect(() => {
    const dateRange = () => {
      let arr = []
      for (let i = 0; i < 10; i += 1) {
        const today = new Date();
        if (i === 0) {
          arr.push(today)
        } else {
          arr.push(new Date(today.setDate(today.getDate() - i)))
        }
      }
      arr = arr.map((date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(date)))
      return setRange(arr)
    }
    dateRange()
  }, [])

  let dates = logs.map((log) => {
    return {...log, date: new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(log.date))}
  })

  return (
    <div style={{ width: '50%', borderRight: 'solid 1px #ccc', margin: '25px 0' }}>
      {range.map((value, index) => {
        console.log(`Value: ${value}, Date: ${dates[index].date}`)
        if (value === dates[index].date) {
          return (
            <div>
              <LogHeadings date={value} />
              <LogEntry logs={dates[index]} />
            </div>
          )
        } else {
          return (
            <div>
              <LogHeadings date={value} />
              <p>No entries for this date.</p>
            </div>
          )
        }
      })}
      {/* {logs.map((log, index) => {
        return <LogEntry key={index} range={range} log={log} />
      })} */}
    </div>
  );
}

export default Logs;