import React, {useState} from 'react';
import './EmployeeEdit.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function EmployeeEdit(props) {
  const {employee, handleEdit} = props
  const { employee_id, id } = useParams()
  const [formData, setFormData] = useState({
    attendance: 'tardy',
    date: '',
    points: 1,
    reason: '',
  });

  useEffect(() => { 
    const prefillForm = () => {
      const infraction = employee.infractions.find(infraction => infraction.id === Number(id))
      setFormData({
        attendance: infraction.attendance,
        date: infraction.date,
        points: infraction.points,
        reason: infraction.reason
      })
    }
    prefillForm()
  },[id, employee.infractions])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
        [name]: value
    }))
  }


  

  return (
    <div className="edit-form-container">
      <h3 style={{ color:"black"}}>Edit Infraction {id} </h3>
      <form className="form" onSubmit={(e) => {
      e.preventDefault();
       handleEdit(employee_id, id, formData);
    }}>
        <label>Attendance:
           <br />
        <select className="form-edit" type='text' name='attendance' onChange={handleChange} value={formData.attendance}>
              <option>tardy</option>
              <option>absence</option>
        </select>

        </label>
        <br />
        <label>Date:
        <br />
      <input name='date' type='date' value={formData.date} onChange={handleChange} readOnly style={{
        width: "68%",
        height: "23%",
        padding: "12px 20px",
        margin: "8px auto",
        border: "1px solid #ccc",
        color: "black",
        background: "none",
        borderRadius: "7px",
        boxSizing: "borderBox",
        fontFamily: "Helvetica"}
        }/>
      </label>
        <label>Points:
        <br />
        <select id='points' className="form-edit" name='points' type='number' value={formData.points} onChange={handleChange} style={{width:"99%"}}>
              <option>1</option> 
              <option>2</option>
              <option>3</option>
              <option>5</option>
        </select>
        </label>
        <br />
        <label>Reason:
        <br />
          <textarea
          className="form-edit" 
          type='text'
          name='reason'
          value={formData.reason}
            onChange={handleChange}
            id="reason-edit"
            />
        </label>
          <button className="button-4" id='edit-submit'>Submit</button>
      </form>
      <Link to={`/employees/${employee_id}`}>
        <button className="button-5">Close</button>
        </Link>
    </div>
  );
}

export default EmployeeEdit;