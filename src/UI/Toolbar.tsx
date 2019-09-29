import React from 'react';
import { AppBar, Toolbar as MaterialToolbar, Typography } from '@material-ui/core';

const Toolbar = () => {
  return (
    <AppBar position="sticky">
        <MaterialToolbar>
          <Typography variant="h6">
            Users
          </Typography>
        </MaterialToolbar>
      </AppBar>
  );
}

export default Toolbar;