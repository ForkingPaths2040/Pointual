import React from 'react';
import {Route, Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton"
import EmployeeEdit from '../../components/EmployeeEdit/EmployeeEdit';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function InfractionsTable(props) {
  const { employee, handleDelete, handleEdit } = props
  
  
  
  const classes = useStyles();
  


  return (
    <>
      <Route path='/employees/:employee_id/infractions/:id'>
        <EmployeeEdit handleEdit={handleEdit} employee={employee}/>
      </Route>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Entry ID</TableCell>
            <TableCell align="center">Attendance</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Reason</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee?.infractions?.map((row) => (
            <TableRow key={row.id} >
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>
              <TableCell align="center" >{row.attendance}</TableCell>
              <TableCell align="center">{new Date(row.date).toLocaleDateString()}</TableCell>
              <TableCell align="center">{row.points}</TableCell>
              <TableCell align="center">{row.reason}</TableCell>
              <TableCell align="center">
                <Link to={`/employees/${employee.id}/infractions/${row.id}`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
              </TableCell>
              <TableCell align="center">
                <button className='button-3' onClick={() => handleDelete(row.id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </>
      
  );
}

export default InfractionsTable;
