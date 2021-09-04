import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { SIGNUP_FORM_CONFIG } from './config/signupForm.config';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: '0.3em 0',
        width: '100%',
      },
    },
    button: {
      margin: '0.3em 0',
      width: '100%',
    },
  })
);

export const Signup = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <form className={classes.root} noValidate autoComplete="off">
        {SIGNUP_FORM_CONFIG.map((element, key) => {
          const { Component } = element;
          return <Component key={key} {...element.props} />;
        })}
        <Button className={classes.button} variant="contained" color="primary">
          Crear Cuenta
        </Button>
        <p>
          Ya tienes una cuenta{' '}
          <Link to="/login">
            <strong>Inicia Sesión</strong>
          </Link>
        </p>
      </form>
    </Grid>
  );
};
