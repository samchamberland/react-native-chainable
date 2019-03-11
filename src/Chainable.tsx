import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Input } from './Input';

type ChainFn = (name: string) => void;

type MarkAsChainableFn = (
  name: string,
  ref: React.RefObject<TextInput>,
) => void;

export interface InputProps {
  name: string;
  isLast?: boolean;
}

const ChainableContext = React.createContext<any>({});

interface Props {
  children: (chainFn: ChainFn) => React.ReactNode;
}

class Chainable extends React.Component<Props> {
  static Input = (props: InputProps & TextInputProps) => (
    <ChainableContext.Consumer>
      {value => <Input markAsChainable={value.markAsChainable} {...props} />}
    </ChainableContext.Consumer>
  );

  _textInputs: { [key: string]: React.RefObject<TextInput> } = {};

  _chain = (name: string) => {
    const { current } = this._textInputs[name];

    if (current) {
      current.focus();
    }
  };

  _markAsChainable: MarkAsChainableFn = (name, ref) => {
    this._textInputs[name] = ref;
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

export { Chainable };
