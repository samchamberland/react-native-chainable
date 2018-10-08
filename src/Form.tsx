import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Input } from './Input';

export type ChainFn = (name: string) => void;

export interface FormProps {
  children: (chainFn: ChainFn) => React.ReactNode;
}

export type MarkAsChainableFn = (
  name: string,
  ref: React.RefObject<TextInput>,
) => void;

export interface InputProps extends TextInputProps {
  name: string;
  isLast?: boolean;
}

const FormContext = React.createContext<any>({});

export class Form extends React.Component<FormProps> {
  static Input = (props: InputProps) => (
    <FormContext.Consumer>
      {value => <Input markAsChainable={value.markAsChainable} {...props} />}
    </FormContext.Consumer>
  );

  _refs: { [key: string]: React.RefObject<TextInput> } = {};

  _chain = (name: string) => {
    const { current } = this._refs[name];

    if (current) {
      current.focus();
    }
  };

  _markAsChainable: MarkAsChainableFn = (name, ref) => {
    this._refs[name] = ref;
  };

  render() {
    return (
      <FormContext.Provider value={{ markAsChainable: this._markAsChainable }}>
        {this.props.children(this._chain)}
      </FormContext.Provider>
    );
  }
}
