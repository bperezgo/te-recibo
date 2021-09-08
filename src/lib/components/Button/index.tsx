import React, { MouseEventHandler } from 'react';
import { Button as MaterialButton } from '@material-ui/core';

export type ButtonProps = {
  className: string;
  content: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonType?: 'inherit' | 'primary' | 'secondary' | 'default';
};

export const Button = ({
  className,
  content,
  buttonType,
  onClick,
}: ButtonProps) => (
  <MaterialButton
    className={className}
    variant="contained"
    onClick={onClick}
    color={buttonType || 'primary'}
  >
    {content}
  </MaterialButton>
);
