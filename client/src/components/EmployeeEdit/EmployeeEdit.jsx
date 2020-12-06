import React, {useState} from 'react';
import './EmployeeEdit.css'
import {putInfraction} from '../../services/infractions'
import { useParams } from 'react-router-dom';

function EmployeeEdit(props) {
  const { employee_id, id  } = useParams()
  // const {employee}
  const [formData, setFormData] = useState({
    attendance: 'tardy',
    date: '',
    points: 1,
    reason: '',
    // employee_id: id
  });
  const [isEdited, setIsEdited] = useState(false);
  
  // useEffect(() => {
  //   const prefillForm = () => {
  //     const infraction = props.foods.find(food => food.id === Number(id));
  //     setFormData({
  //       name: foodItem.name
  //     })
  //   }
  //   if (props.foods.length){
  //     prefillForm();
  //   }
  // }, [props.foods])

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

  return (
    <div>
      <form className="form-create" onSubmit={(e) => {
      e.preventDefault();
      handleEdit(employee_id, id, formData);
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
          <button>Submit</button>
        </form>
    </div>
  );
}

export default EmployeeEdit;