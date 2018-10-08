import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  isLast?: boolean;
  by: () => (ref: React.RefObject<TextInput>) => void;
}

export class Input extends React.Component<InputProps> {
  _ref: React.RefObject<TextInput> = React.createRef();

  componentDidMount() {
    this.props.by()(this._ref);
  }

  render() {
    return (
      <TextInput
        ref={this._ref}
        returnKeyType={!this.props.isLast ? 'next' : 'done'}
        blurOnSubmit={this.props.isLast}
        {...this.props}
      />
    );
  }
}
