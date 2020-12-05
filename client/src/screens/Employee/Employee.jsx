import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './Employee.css'
import {getEmployee} from '../../services/employees'
import EmployeeDetail from '../../components/EmployeeDetail.jsx/EmployeeDetail';
import InfractionsTable from '../../components/InfractionsTable/InfractionsTable'
import {deleteInfraction, postInfraction} from '../../services/infractions'
import Modal from 'react-modal'
import "react-datepicker/dist/react-datepicker.css"

function Employee(props) {
  // maybe try useEffect in the EmployeeCards?
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [isDeleted, setIsDeleted] = useState(false)
  const [isCreated, setIsCreated] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    attendance: 'tardy',
    date: '',
    points: 1,
    reason: '',
    employee_id: id
  })


  useEffect(() => {
    const fetchEmployee = async () => {
      const resp = await getEmployee(id);
      setEmployee(resp);
      
    }
    fetchEmployee();
  }, [id, isDeleted, isCreated])
  
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
        [name]: value
    }))
  }
  const handleCreate = async (infraction) => {
    const newInfraction = await postInfraction(id, infraction);
    setFormData(prevState => [...prevState, newInfraction]);
    setIsCreated(!isDeleted)
    setIsOpen(!isOpen)
  }
  const handleDelete = async (id) => {
    await deleteInfraction(employee.id, id)
    setIsDeleted(!isDeleted)
}

  return (
    <div className='employee-container'>
      <EmployeeDetail employee={employee} />
      <div className='grid-container'>
        <div className="table-page-header">
          <h2 className="infraction-title">Infractions</h2>
          <button className="button-4" onClick={toggleModal}>New Entry</button>
          {/* <AddIcon style={{marginLeft: "10px", color:"#1c8bf9", fontSize: "2em", fontWeight: "2px"}}/> */}
        </div>
        <InfractionsTable employee={employee} handleDelete={handleDelete} toggleModal={toggleModal}/>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        ariaHideApp={false}
      >
        <button onClick={toggleModal}>close</button>
          <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>New Infraction</h3>
      <label>Attendance:
        <select type='text' name='attendance' onChange={handleChange} value={formData.attendance}>
              <option>tardy</option>
              <option>absence</option>
        </select>

          </label>
      <label>Date:
      <input name='date' type='date' value={formData.date} onChange={handleChange} />
      </label>
      
      <label>Points:
        <select name='points' type='number' value={formData.points} onChange={handleChange}>
              <option>1</option> 
              <option>2</option>
              <option>3</option>
              <option>5</option>
        </select>
            
        </label>
      <label>Reason:
        <textarea
          type='text'
          name='reason'
          value={formData.reason}
          onChange={handleChange}
            />
        </label>
      <label>Employee ID:
        <input
          type='text'
          name='employee_id'
              value={formData.employee_id}
              readOnly
            />
        </label>
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default Employee;