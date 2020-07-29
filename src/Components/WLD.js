import React from 'react';
import Box from '@material-ui/core/Box';

function WLD({ result }) {
  // Display a green, red or grey span for the last 5 games indicating win, lose or draw
  return <span className={result}>{result}</span>;
}

export default WLD;
