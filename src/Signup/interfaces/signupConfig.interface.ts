import { FC } from 'react';

export interface ISignupConfig<T> {
  Component: FC<T>;
  props: T;
}
