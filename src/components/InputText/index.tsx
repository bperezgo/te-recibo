import React from 'react';
import { TextField } from '@material-ui/core';

export type InputTextProps = {
  type?: string;
  label: string;
  id: string;
  variant?: 'standard' | 'outlined' | 'filled';
  defaultValue?: string;
  children?: React.ReactNode;
};

export const InputText = ({
  id,
  variant,
  type,
  label,
  defaultValue,
}: InputTextProps) => (
  <TextField
    id={id}
    label={label}
    variant={variant}
    type={type}
    defaultValue={defaultValue}
  />
);
