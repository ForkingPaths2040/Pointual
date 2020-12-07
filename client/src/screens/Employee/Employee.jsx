import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './Employee.css'
import {getEmployee} from '../../services/employees'
import EmployeeDetail from '../../components/EmployeeDetail.jsx/EmployeeDetail';
import InfractionsTable from '../../components/InfractionsTable/InfractionsTable'
import {deleteInfraction, postInfraction, putInfraction} from '../../services/infractions'
import Modal from 'react-modal'
import "react-datepicker/dist/react-datepicker.css"

function Employee(props) {
  
  const { employee_id, id } = useParams();
  const [employee, setEmployee] = useState({});
  const [isDeleted, setIsDeleted] = useState(false)
  const [isCreated, setIsCreated] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState(0);
  
  const [formData, setFormData] = useState({
    attendance: 'tardy',
    date: '',
    points: 1,
    reason: '',
    employee_id: employee_id
  })


  useEffect(() => {
    const fetchEmployee = async () => {
      const resp = await getEmployee(id);
      setEmployee(resp);
    }
    fetchEmployee();
  }, [id, isDeleted, isCreated, isEdited])

  useEffect(() => {
    const handleSum = () => {
      const totalInfractions = employee.infractions?.map((infraction) => {
        return infraction.points
      })
      const sum = totalInfractions?.reduce((sum, value) => sum + value)
      setPoints(sum)
    }
    handleSum();
  }, [employee.infractions])
  
  function toggleModal() {
    setIsOpen(!isOpen);
    setFormData({
      attendance: 'tardy',
      date: '',
      points: 1,
      reason: '',
      employee_id: id
    })
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
        [name]: value
    }))
  }

  const handleEdit = async (id, id2, formData) => {
    await putInfraction(id, id2, formData)
    setIsEdited(!isEdited) 
  }
  
  

  const handleCreate = async (infraction) => {
    await postInfraction(id, infraction);
    setIsCreated(!isCreated)
    setIsOpen(!isOpen)
  }
  const handleDelete = async (id) => {
    await deleteInfraction(employee.id, id)
    setIsDeleted(!isDeleted)
}

  return (
    <div className='employee-container'>
      <EmployeeDetail employee={employee} points={points}/>
      <div className='grid-container'>
        <div className="table-page-header">
          <h2 className="infraction-title">Infractions</h2>
          <button className="button-4" onClick={toggleModal}>New Entry</button>
        </div>
        <InfractionsTable employee={employee} handleDelete={handleDelete}  handleEdit={handleEdit}/>
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
          <label>Employee ID:
          <br />
        <input
          type='text'
          name='employee_id'
          value={formData.employee_id}
          readOnly
          className="reformat-input"
            />
        </label>
          <button className="button-6">Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default Employee;