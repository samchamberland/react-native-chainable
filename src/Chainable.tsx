import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const textInputRefs: { [key: string]: TextInput } = {};
const defaultValue = {
  addRef: (name: string, ref: TextInput | null) => {
    if (ref) {
      textInputRefs[name] = ref;
    }
  },
  chain: (name: string) => textInputRefs[name].focus(),
};
const context = React.createContext(defaultValue);
const { Consumer } = context;

export type ChainFn = (name: string) => void;

export interface FormProps {
  children: (fn: ChainFn) => React.ReactNode;
}

export const Form = ({ children }: FormProps) => (
  <Consumer>{({ chain }) => children(chain)}</Consumer>
);

export interface InputProps {
  name: string;
  isLast?: boolean;
}

export const Input = ({
  name,
  isLast = false,
  ...props
}: InputProps & TextInputProps) => (
  <Consumer>
    {({ addRef }) => (
      <TextInput
        ref={ref => addRef(name, ref)}
        returnKeyType={!isLast ? 'next' : 'done'}
        {...props}
      />
    )}
  </Consumer>
);
