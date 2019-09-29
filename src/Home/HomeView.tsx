import React from 'react';
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';

const HomeView = (props: HomeProps) => {
  const { message, actionText, onAction } = props;
  return (
    <Grid container>
      <Grid item xs={6}>
        <p>{message}</p>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={onAction}>{actionText}</Button>
      </Grid>
    </Grid>
  );
}

interface HomeProps {
  readonly message: string;
  readonly actionText: string;
  readonly onAction: () => void;
}

export default HomeView