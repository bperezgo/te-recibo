import { FC } from 'react';

export interface ILoginConfig<T> {
  Component: FC<T>;
  props: T;
}
