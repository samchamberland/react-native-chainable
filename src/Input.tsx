import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import Context from './Context';

export interface InputProps {
  name: string;
  isLast?: boolean;
}

export const Input = ({
  name,
  isLast = false,
  ...props
}: InputProps & TextInputProps) => (
  <Context.Consumer>
    {({ addRef }) => (
      <TextInput
        ref={ref => addRef(name, ref)}
        returnKeyType={!isLast ? 'next' : 'done'}
        blurOnSubmit={isLast}
        {...props}
      />
    )}
  </Context.Consumer>
);
