import React, { useState, Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import Box from '@material-ui/core/Box';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';
import TableBody from '@material-ui/core/TableBody';

import WLD from './WLD';

const customColumnStyle = { Width: '5px', backgroundColor: 'brown' };

const tableStyle = makeStyles({
  tableStyle: {
    minWidth: 850,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: '1px 2px',
    textAlign: 'center',
  },
}))(TableCell);

function Row({ row }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <Fragment>
      <StyledTableRow>
        <StyledTableCell style={customColumnStyle}></StyledTableCell>
        <StyledTableCell>{row.rank}</StyledTableCell>
        <StyledTableCell>{row.teamName}</StyledTableCell>
        <StyledTableCell align="right">{row.all.matchsPlayed}</StyledTableCell>
        <StyledTableCell align="right">{row.all.win}</StyledTableCell>
        <StyledTableCell align="right">{row.all.draw}</StyledTableCell>
        <StyledTableCell align="right">{row.all.lose}</StyledTableCell>
        <StyledTableCell align="right">{row.all.goalsFor}</StyledTableCell>
        <StyledTableCell align="right">{row.all.goalsAgainst}</StyledTableCell>
        <StyledTableCell align="right">
          {row.all.goalsFor - row.all.goalsAgainst}
        </StyledTableCell>
        <StyledTableCell align="right">{row.points}</StyledTableCell>
        <StyledTableCell align="right">
          <div className="teamForm">
            {row.forme.split('').map((result, i) => (
              <WLD key={i} result={result}></WLD>
            ))}
          </div>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow style={{ padding: 0, margin: 0 }}>
        <StyledTableCell style={{ padding: 0, margin: 0 }} colSpan={12}>
          <Collapse in={true}>
            <Box margin={0}>
              <Table
                className={tableStyle.tableStyle}
                size="small"
                aria-label="a dense table"
              >
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell
                      style={customColumnStyle}
                    ></StyledTableCell>
                    <StyledTableCell>{row.rank}</StyledTableCell>
                    <StyledTableCell>{row.teamName}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.all.matchsPlayed}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.all.win}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.all.draw}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.all.lose}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.all.goalsFor}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.all.goalsAgainst}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.all.goalsFor - row.all.goalsAgainst}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.points}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="teamForm">
                        {row.forme.split('').map((result, i) => (
                          <WLD key={i} result={result}></WLD>
                        ))}
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </Fragment>
  );
}

export default Row;
