import React, { ChangeEventHandler } from 'react';
import { TextField } from '@material-ui/core';

export type InputTextProps = {
  type?: string;
  label: string;
  name: string;
  id: string;
  value?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  defaultValue?: string;
  children?: React.ReactNode;
  onChange?: ChangeEventHandler;
};

export const InputText = ({
  id,
  variant,
  type,
  label,
  name,
  defaultValue,
  onChange,
  value,
}: InputTextProps) => (
  <TextField
    id={id}
    label={label}
    name={name}
    variant={variant}
    value={value || ''}
    type={type}
    defaultValue={defaultValue}
    onChange={onChange}
  />
);
