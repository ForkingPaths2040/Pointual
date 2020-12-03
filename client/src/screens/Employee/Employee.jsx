import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './Employee.css'
import {getEmployee} from '../../services/employees'
import EmployeeDetail from '../../components/EmployeeDetail.jsx/EmployeeDetail';
import MaterialTable from '../../components/MaterialTable/MaterialTable';

function Employee(props) {
  // maybe try useEffect in the EmployeeCards?
  const [employee, setEmployee] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      const resp = await getEmployee(id);
      setEmployee(resp);
      
    }
    fetchEmployee();
  }, [id])
  return (
    <div className='employee-container'>
      <EmployeeDetail employee={employee} />
      <div className='grid-container'>
        <MaterialTable />
      </div>
    </div>
  );
}

export default Employee;