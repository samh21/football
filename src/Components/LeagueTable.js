import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Row from './Row';

function LeagueTable({ clubData }) {
  return (
    <Fragment>
      <Paper>
        <Box className="gridHead">
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box className="desktopView">Played</Box>
          <Box className="mobileView">P</Box>
          <Box className="desktopView">Won</Box>
          <Box className="mobileView">W</Box>
          <Box className="desktopView">Drawn</Box>
          <Box className="mobileView">D</Box>
          <Box className="desktopView">Lost</Box>
          <Box className="mobileView">L</Box>
          <Box className="desktopView">For</Box>
          <Box className="desktopView">Against</Box>
          <Box>GD</Box>
          <Box className="desktopView">Points</Box>
          <Box className="mobileView">Pts</Box>
          <Box className="showForm">Form</Box>
        </Box>
        {clubData.map((team) => (
          <Row key={team.team_id} row={team}></Row>
        ))}
      </Paper>
    </Fragment>
  );
}

export default LeagueTable;
