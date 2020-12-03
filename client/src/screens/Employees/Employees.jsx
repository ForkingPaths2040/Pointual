import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards'
import {getEmployees} from '../../services/employees'
import './Employees.css'


function Employees(props) {
  const [employees, setEmployees] = useState([]);
  

  useEffect(() => {
    const fetchEmployees = async () => {
      const resp = await getEmployees()
      setEmployees(resp)
    }
   fetchEmployees()
  }, [])
  const employeesJSX = employees.map((employee, index) => (
    <EmployeeCards
      _id={employee.id}
      firstName={employee.first_name}
      lastName={employee.last_name}
      imgURL= {employee.img_URL}
      position={employee.position}
      points={employee.points}
      key={index}
    />
  ));
  return (
    <>
      {
        props.currentUser ?
          <div className='employees'>{employeesJSX}</div>
          :
          <Redirect to='/login' />
          
      }
    </>
  );
}

export default Employees;