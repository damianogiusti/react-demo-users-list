import React from 'react';
import { AppBar, Toolbar as MaterialToolbar, Typography } from '@material-ui/core';

interface ToolbarProps {
  readonly title: string;
}

const Toolbar = (props: ToolbarProps) => {
  return (
    <AppBar position="sticky">
        <MaterialToolbar>
          <Typography variant="h6">
            {props.title}
          </Typography>
        </MaterialToolbar>
      </AppBar>
  );
}

export default Toolbar;