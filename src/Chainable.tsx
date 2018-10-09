import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Input } from './Input';

export type ChainFn = (name: string) => void;

export interface ChainableProps {
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

const ChainableContext = React.createContext<any>({});

export class Chainable extends React.Component<ChainableProps> {
  static Input = (props: InputProps) => (
    <ChainableContext.Consumer>
      {value => <Input markAsChainable={value.markAsChainable} {...props} />}
    </ChainableContext.Consumer>
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
      <ChainableContext.Provider
        value={{ markAsChainable: this._markAsChainable }}
      >
        {this.props.children(this._chain)}
      </ChainableContext.Provider>
    );
  }
}
