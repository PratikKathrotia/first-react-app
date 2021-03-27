import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  shell_Title: {
    flexGrow: 1,
  },
}));

const ShellbarComponent = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.shell_Title}>
            App shell
          </Typography>
          <Button variant="text" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const Shellbar = ShellbarComponent;
