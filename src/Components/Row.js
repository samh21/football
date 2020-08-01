import React, { useState, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import WLD from './WLD';

function Row({ row }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <Fragment>
      <Box style={{ borderBottom: '1px solid rgb(216, 216, 216)' }}>
        <Box className="grid">
          <Box>
            <IconButton size="small" onClick={() => setCollapse(!collapse)}>
              {collapse ? (
                <KeyboardArrowUpIcon style={{ color: 'gray' }} />
              ) : (
                <KeyboardArrowDownIcon style={{ color: 'gray' }} />
              )}
            </IconButton>
          </Box>
          <Box>{row.rank}</Box>
          <Box>{row.teamName}</Box>
          <Box>{row.all.matchsPlayed}</Box>
          <Box>{row.all.win}</Box>
          <Box>{row.all.draw}</Box>
          <Box>{row.all.lose}</Box>
          <Box className="desktopView">{row.all.goalsFor}</Box>
          <Box className="desktopView">{row.all.goalsAgainst}</Box>
          <Box>{row.all.goalsFor - row.all.goalsAgainst}</Box>
          <Box>{row.points}</Box>
          <Box className="showForm">
            <div className="teamForm">
              {row.forme.split('').map((result, i) => (
                <WLD key={i} result={result}></WLD>
              ))}
            </div>
          </Box>
        </Box>

        <Collapse in={collapse} timeout={600} unmountOnExit>
          <Box className="grid">
            <Box></Box>
            <Box></Box>
            <Box>Home</Box>
            <Box>{row.home.matchsPlayed}</Box>
            <Box>{row.home.win}</Box>
            <Box>{row.home.draw}</Box>
            <Box>{row.home.lose}</Box>
            <Box className="desktopView">{row.home.goalsFor}</Box>
            <Box className="desktopView">{row.home.goalsAgainst}</Box>
            <Box>{row.home.goalsFor - row.home.goalsAgainst}</Box>
            <Box></Box>
            <Box></Box>
          </Box>
          <Box className="grid">
            <Box></Box>
            <Box></Box>
            <Box>Away</Box>
            <Box>{row.away.matchsPlayed}</Box>
            <Box>{row.away.win}</Box>
            <Box>{row.away.draw}</Box>
            <Box>{row.away.lose}</Box>
            <Box className="desktopView">{row.away.goalsFor}</Box>
            <Box className="desktopView">{row.away.goalsAgainst}</Box>
            <Box>{row.away.goalsFor - row.away.goalsAgainst}</Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Collapse>
      </Box>
    </Fragment>
  );
}

export default Row;
