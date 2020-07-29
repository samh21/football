import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WLD from './WLD';

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
            <TableCell>Team</TableCell>
            <TableCell align="right">Played</TableCell>
            <TableCell align="right">Won</TableCell>
            <TableCell align="right">Drawn</TableCell>
            <TableCell align="right">Lost</TableCell>
            <TableCell align="right">For</TableCell>
            <TableCell align="right">Against</TableCell>
            <TableCell align="right">GD</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Form</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubData.map((team) => (
            <TableRow key={team.team_id}>
              <TableCell>{team.rank}</TableCell>
              <TableCell>{team.teamName}</TableCell>
              <TableCell align="right">{team.all.matchsPlayed}</TableCell>
              <TableCell align="right">{team.all.win}</TableCell>
              <TableCell align="right">{team.all.draw}</TableCell>
              <TableCell align="right">{team.all.lose}</TableCell>
              <TableCell align="right">{team.all.goalsFor}</TableCell>
              <TableCell align="right">{team.all.goalsAgainst}</TableCell>
              <TableCell align="right">
                {team.all.goalsFor - team.all.goalsAgainst}
              </TableCell>
              <TableCell align="right">{team.points}</TableCell>
              <TableCell align="right">
                <div className="teamForm">
                  {team.forme.split('').map((result, i) => (
                    <WLD key={i} result={result}></WLD>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeagueTable;
