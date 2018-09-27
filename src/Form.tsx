import * as React from 'react';

import Context from './Context';

export type ChainFn = (name: string) => void;

export interface FormProps {
  children: (fn: ChainFn) => React.ReactNode;
}

export const Form = ({ children }: FormProps) => (
  <Context.Consumer>{({ chain }) => children(chain)}</Context.Consumer>
);
