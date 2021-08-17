import React, {useState, useEffect} from 'react';
import './Logs.css'
import { getAllInfractions } from '../../services/infractions';
import LogEntry from '../../components/LogEntry/LogEntry';
// import LogHeadings from '../../components/LogHeadings/LogHeadings';
import SelectedEntry from '../../components/SelectedEntry/SelectedEntry';
import Modal from 'react-modal'
import "react-datepicker/dist/react-datepicker.css"
import { postInfraction} from '../../services/infractions'
import {getEmployees} from '../../services/employees'
// import Employee from '../Employee/Employee';

function Logs(props) {
  const [logs, setLogs] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [dailies, setDailies] = useState([]);
  
  const [range, setRange] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isCreated, setIsCreated] = useState(false)
  const [formData, setFormData] = useState({
    attendance: 'tardy',
    date: '',
    points: 1,
    reason: '',
    employee_id: ''
  })
  
  
  
  useEffect(() => {
    const fetchEmployees = async () => {
      const resp = await getEmployees()
      setEmployees(resp)
    }
    const fetchLogs = async () => {
      const resp = await getAllInfractions();
      let sorted = resp.sort((a, b) => new Date(b.date) - new Date(a.date))
      setLogs(sorted)
    }
    fetchEmployees();
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

  useEffect(() => {
    // takes the previous state of range that descends from today's date and compares to each infraction date to then create an array of key-value pairs of matching conditional 
    const matchRangeAndLogs = () => {
      let matched = []
      if (range.length > 0 && logs.length > 0) {
         range.forEach((date, i) => {
           let obj = {};
           obj[date] = null
           matched.push(obj)
           return logs.forEach((log, i) => {
            //  reformat to compare properly
            log.date = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(log.date))
             if (log.date === date) {
              //  in order to store $date as a variable must use bracket notation and declaring the value to be an array holding an object
               obj[date] = [log]
               if (obj[date].length > 0) {
                 return obj[date].push(log)
               }
            }
          })
        })
        return setDailies(matched)
      }
    }
    matchRangeAndLogs()
  }, [])

  function toggleModal() {
    setIsOpen(!isOpen);
    setFormData({
      attendance: 'tardy',
      date: '',
      points: 1,
      reason: '',
      employee_id: ''
    })
  }
  const handleCreate = async (infraction) => {
    let arrName = formData.employee_id.split(' ')
    console.log(arrName)
    let id = employees.find((employee) => employee.first_name === arrName[0] && employee.last_name === arrName[1])
    setTimeout(() => postInfraction(id.employee_id, { ...infraction, employee_id: id.employee_id }), 2000);
    setIsCreated(!isCreated)
    setIsOpen(!isOpen)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSelect = (log) => {
    return setSelectedEntry({...selectedEntry, ...log})
   }

  return (
    <div className='flex-row'>
    <div style={{ width: '50%', borderRight: 'solid 1px #ccc', margin: '25px 0' }}>
      {logs.map((value, index) => {
        return <LogEntry log={value} key={index} handleSelect={() => handleSelect(value)} modal={toggleModal}/>
      })}
    </div>
      <div style={{ width: '50%', margin: '25px 0' }}>
        {selectedEntry.attendance ? <SelectedEntry entry={selectedEntry} />: <p style={{width:'85%', fontStyle:'italic', margin: '1em auto'}}>No entries selected.</p> }
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            border: '1px solid #ccc',
            background: 'rgba(51, 51, 51, 1)',
            left: "10%",
            right: "10%",
            
          }
        }}
      >
        <button className="button-5" onClick={toggleModal}>Close</button>
          <form className="form-create" onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3 style={{color:"white"}}>New Infraction</h3>
      <label>Attendance:
        <select className="form-add" type='text' name='attendance' onChange={handleChange} value={formData.attendance}>
              <option>tardy</option>
              <option>absence</option>
        </select>

          </label>
          <label>Date:
          <br/>
            <input name='date' type='date' value={formData.date} onChange={handleChange} style={{
        width: "71%",
        height: "23%",
        color: "rgb(191, 191, 191)",
        fontSize: "16px",
        padding: "12px 20px",
        margin: "8px auto",
        background:"none",
        border: "none",
        borderBottom: "solid 1px rgb(191, 191, 191)",
        boxSizing: "borderBox",
        fontFamily: "Helvetica"}
      } />
      </label>
      <br/>
          <label>Points:
          <br/>
        <select className="form-add" name='points' type='number' value={formData.points} onChange={handleChange}>
              <option>1</option> 
              <option>2</option>
              <option>3</option>
              <option>5</option>
        </select>
            
        </label>
          <label>Reason:
               <br/>
        <textarea
          type='text'
          name='reason'
          value={formData.reason}
          onChange={handleChange}
          className="form-add"
            />
        </label>
          <label>Employee:
            <br />
            <select name='employee_id' onChange={handleChange} value={formData.employee_id}>
              {employees.map((employee, index) => <option key={index}>{`${employee.first_name} ${employee.last_name}`}</option>)}
            </select>
        {/* <input
          type='text'
          name='employee_id'
          value={formData.employee_id}
          readOnly
          className="reformat-input"
            /> */}
        </label>
          <button className="button-6">Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default Logs;