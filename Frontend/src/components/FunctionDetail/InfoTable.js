import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function InfoTable({ data }) {
  return (
    <TableContainer className='table-component' component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Label</b></TableCell>
            <TableCell align="right"><b>Domain</b></TableCell>
            <TableCell align="right"><b>Standard Model</b></TableCell>
            <TableCell align="right"><b>Degree</b></TableCell>
            <TableCell align="right"><b>Field of Definition</b></TableCell>
            <TableCell align="right"><b>Min Field of Definition</b></TableCell>
            <TableCell align="right"><b>Field of Modull</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">{data.label}</TableCell>
            <TableCell align="right">{data.base_field_label}</TableCell>
            <TableCell align="right">{"tmp"}</TableCell>
            <TableCell align="right">{data.degree}</TableCell>
            <TableCell align="right">{"tmp"}</TableCell>
            <TableCell align="right">{"tmp"}</TableCell>
            <TableCell align="right">{"tmp"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}