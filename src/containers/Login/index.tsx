import React from 'react';
import { Container } from '@material-ui/core';
import { LOGIN_FORM_CONFIG } from '../../config/login/loginForm.config';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  })
);

export const Login = () => {
  const classes = useStyles();
  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        {LOGIN_FORM_CONFIG.map((element, key) => {
          const { Component } = element;
          return <Component key={key} {...element.props} />;
        })}
      </form>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </Container>
  );
};
