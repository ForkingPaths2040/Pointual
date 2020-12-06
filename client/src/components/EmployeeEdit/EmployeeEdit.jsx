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
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
        [name]: value
    }))
  }


  

  return (
    <div>
      <form className="form-create" onSubmit={(e) => {
      e.preventDefault();
       handleEdit(employee_id, id, formData);
    }}>
        <h3 style={{ color:"black"}}>Edit Infraction {id} </h3>
      <label>Attendance:
        <select type='text' name='attendance' onChange={handleChange} value={formData.attendance}>
              <option>tardy</option>
              <option>absence</option>
        </select>

          </label>
      <label>Date:
      <input name='date' type='date' value={formData.date} onChange={handleChange} readOnly/>
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
          <button>Submit</button>
      </form>
      <Link to={`/employees/${employee_id}`}>
        <button>Close</button>
        </Link>
    </div>
  );
}

export default EmployeeEdit;