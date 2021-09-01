import React from 'react';
import { LOGIN_FORM_CONFIG } from '../../config/login/loginForm.config';

export const Login = () => (
  <div>
    {LOGIN_FORM_CONFIG.map((element) => (
      <element.component {...element.props} />
    ))}
    <div className="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
);
