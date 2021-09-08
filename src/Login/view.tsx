import React, { useState, ChangeEvent } from 'react';
import { Grid, Button } from '@material-ui/core';
import { LOGIN_FORM_CONFIG } from './config/loginForm.config';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: '0.3em 0.3em',
        width: 'calc(100% - 0.6em)',
      },
    },
    button: {
      margin: '2.0em 0.3em',
      width: 'calc(100% - 0.6em)',
    },
  })
);

export const Login = () => {
  const classes = useStyles();
  const [state, setState] = useState<any>({
    email: '',
    password: '',
  });
  const onChangeHandler = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  const onClickHandler = () => {};
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <form className={classes.root} noValidate autoComplete="off">
        {LOGIN_FORM_CONFIG.map((element, key) => {
          const { Component, props } = element;
          return (
            <Component
              key={key}
              value={state[props.name]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeHandler(props.name, e.target.value)
              }
              {...props}
            />
          );
        })}
        <Button
          className={classes.button}
          onClick={onClickHandler}
          variant="contained"
          color="primary"
        >
          Inicia Sesión
        </Button>
        <p>
          ¿No tienes una cuenta?{' '}
          <Link to="/sign-up">
            <strong>Registrate</strong>
          </Link>
        </p>
      </form>
    </Grid>
  );
};
