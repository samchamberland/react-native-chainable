import * as React from 'react';
import { TextInput } from 'react-native';

export type ChainFn = (name: string) => void;
export type AddFn = (name: string, ref: React.RefObject<TextInput>) => void;

export interface FormProps {
  children: (chainFn: ChainFn, addFn: AddFn) => React.ReactNode;
}

export class Form extends React.Component<FormProps> {
  _refs: { [key: string]: React.RefObject<TextInput> } = {};

  _chain = (name: string) => {
    const { current } = this._refs[name];

    if (current) {
      current.focus();
    }
  };

  _by = (name: string) => (ref: React.RefObject<TextInput>) => {
    this._refs[name] = ref;
  };

  render() {
    return this.props.children(this._chain, this._by);
  }
}
