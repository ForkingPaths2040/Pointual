import React, {useState, useEffect} from 'react';
import './Logs.css'
import { getAllInfractions } from '../../services/infractions';
import LogEntry from '../../components/LogEntry/LogEntry';
import LogHeadings from '../../components/LogHeadings/LogHeadings';
import SelectedEntry from '../../components/SelectedEntry/SelectedEntry';

function Logs(props) {
  const [logs, setLogs] = useState([]);
  const [range, setRange] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState({});
  
  
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

  const handleSelect = (log) => {
    return setSelectedEntry({...selectedEntry, ...log})
   }

  // let dates = logs.map((log) => {
  //   return {...log, date: new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(log.date))}
  // })
  // let dailies = dates.filter((element => element.date === value))

  return (
    <div className='flex-row'>
    <div style={{ width: '50%', borderRight: 'solid 1px #ccc', margin: '25px 0' }}>
      {logs.map((value, index) => {
        return <LogEntry log={value} key={index} handleSelect={() => handleSelect(value)}/>
      })}
    </div>
      <div style={{ width: '50%', margin: '25px 0' }}>
        {selectedEntry.attendance ? <SelectedEntry entry={selectedEntry} />: <p style={{width:'85%', fontStyle:'italic', margin: '1em auto'}}>No entries selected.</p> }
    </div>
    </div>
  );
}

export default Logs;