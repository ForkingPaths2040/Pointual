import React, { useState, useEffect } from 'react';
import Navigation from '../../layouts/Navigation/Navigation';
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
  console.log(employees)
  const employeesJSX = employees.map((employee, index) => (
    <EmployeeCards
      _id={employee.employee_id}
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
      <Navigation handleLogout={props.handleLogout} />
      <div className='employees'>{employeesJSX}</div>
    </>
  );
}

export default Employees;