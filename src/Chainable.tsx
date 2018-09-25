import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const textInputRefs: { [key: string]: React.RefObject<any> } = {};
const defaultValue = {
  addRef: (name: string, ref: React.RefObject<any>) => {
    if (!!ref) {
      textInputRefs[name] = ref;
    }
  },
  next: (name: string) => textInputRefs[name].focus(),
};

const context = React.createContext(defaultValue);
const { Consumer } = context;

export type NextFn = (name: string) => void;

export interface SheetProps {
  children: (fn: NextFn) => React.ReactNode;
}

export const Sheet = ({ children }: SheetProps) => (
  <Consumer>{({ next }) => children(next)}</Consumer>
);

export interface LineProps {
  name: string;
  isLast?: boolean;
}

export const Line = ({
  name,
  isLast = false,
  ...props
}: LineProps & TextInputProps) => (
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
