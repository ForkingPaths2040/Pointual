import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './Employee.css'
import {getEmployee} from '../../services/employees'
import EmployeeDetail from '../../components/EmployeeDetail.jsx/EmployeeDetail';
import InfractionsTable from '../../components/InfractionsTable/InfractionsTable'
// import AddIcon from '@material-ui/icons/Add';

function Employee(props) {
  // maybe try useEffect in the EmployeeCards?
  const [employee, setEmployee] = useState({});
  const [dataRow, setDataRow] = useState({});

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
        <div className="table-page-header">
          <h2 className="infraction-title">Infractions</h2>
          <button className="button-4">New Entry</button>
          {/* <AddIcon style={{marginLeft: "10px", color:"#1c8bf9", fontSize: "2em", fontWeight: "2px"}}/> */}
        </div>
        <InfractionsTable employee={employee}/>
      </div>
    </div>
  );
}

export default Employee;