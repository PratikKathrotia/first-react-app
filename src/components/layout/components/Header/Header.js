import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header_Title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  header__Actions: {
    display: 'flex',
    flexFlow: 'row-reverse',
    alignItems: 'center',
  },
}));

const HeaderComponent = ({ title, actions }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header_Title}>
        <Typography variant="h5">{title}</Typography>
      </div>
      <div className={classes.header__Actions}>
        <Button variant="contained" size="small" color="primary">
          Create
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Edit
        </Button>
      </div>
    </>
  );
};

export const Header = HeaderComponent;
