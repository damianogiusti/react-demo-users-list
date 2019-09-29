import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';

const TopProgressView = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" marginTop="16pt">
      <CircularProgress/>
    </Box>
  );
}

export default TopProgressView;