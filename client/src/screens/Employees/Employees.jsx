import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards'
import {getEmployees} from '../../services/employees'
import './Employees.css'


function Employees(props) {
  const [employees, setEmployees] = useState([]);
  const [firstBtn, setFirstBtn] = useState(false);
  const [lastBtn, setLastBtn] = useState(false);
  
  
  
  

  useEffect(() => {
    const fetchEmployees = async () => {
      const resp = await getEmployees()
        setEmployees(resp)
      }
    fetchEmployees()
  }, [])

  const sortFirstName = employees.slice().sort(function (a, b) {
    let nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
        
    // names must be equal
    return 0;
  });

  const sortLastName = employees.slice().sort(function (a, b) {
    let nameA = a.last_name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.last_name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
        
    // names must be equal
    return 0;
  });

  const handleToggle = (type) => {
    switch (type) {
      case 'first':
        setFirstBtn(true)
        setLastBtn(false)
        break;
      case 'last':
        setLastBtn(true)
        setFirstBtn(false)
        break;
      default:
        setFirstBtn(false)
        setLastBtn(false)
    }
  }
  
  return (
    <>
      {
        props.currentUser ?
          <div className='flex-column'>
            <div className='flex-row' style={{margin:'55px 127px 16px'}}>
              <button onClick={() => {
                handleToggle('first');
                setEmployees(sortFirstName)
              }
              } className={firstBtn ? 'button-7 active-btn' : 'button-7'} style={{ height: '40px' }}>First Name</button>
              <button onClick={() => {
                handleToggle('last');
                setEmployees(sortLastName)
              }}
               className={lastBtn ? 'button-7 active-btn' : 'button-7'} style={{ height: '40px' }}>Last Name</button>
            </div>
            <div className='employees'>{employees.map((employee, index) => {
              return <EmployeeCards
                _id={employee.id}
                firstName={employee.first_name}
                lastName={employee.last_name}
                imgURL={employee.img_URL}
                position={employee.position}
                points={employee.points}
                key={index}
                employee={employee}
              />
            })}</div>
          </div>
          :
          <Redirect to='/login' />
          
      }
    </>
  );
}

export default Employees;