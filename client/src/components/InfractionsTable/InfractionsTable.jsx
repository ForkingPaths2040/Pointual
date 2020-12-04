import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getInfractions} from '../../services/infractions'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function InfractionsTable(props) {
  const classes = useStyles();
  const {employee} = props
  // const [infractions, setInfractions] = useState({
  //   attendance: '',
  //   date: '',
  //   points: '',
  //   reason: ''
  // })
 console.log(employee.infractions)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entry ID</TableCell>
            <TableCell align="right">Attendance</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Reason</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee?.infractions?.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.attendance}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.reason}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InfractionsTable;
