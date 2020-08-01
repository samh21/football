import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from './Row';

const tableStyle = makeStyles({
  tableStyle: {
    minWidth: 850,
  },
});

function LeagueTable({ clubData }) {
  console.log(clubData);

  return (
    <TableContainer component={Paper}>
      <Table
        className={tableStyle.tableStyle}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">Played</TableCell>
            <TableCell align="center">Won</TableCell>
            <TableCell align="center">Drawn</TableCell>
            <TableCell align="center">Lost</TableCell>
            <TableCell align="center">For</TableCell>
            <TableCell align="center">Against</TableCell>
            <TableCell align="center">GD</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Form</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubData.map((team) => (
            <Row key={team.team_id} row={team}></Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeagueTable;
