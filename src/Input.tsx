import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';

type MarkAsChainableFn = (
  name: string,
  ref: React.RefObject<TextInput>,
) => void;

interface InputProps extends TextInputProps {
  name: string;
  isLast?: boolean;
  markAsChainable: MarkAsChainableFn;
}

export class Input extends React.Component<InputProps> {
  static defaultProps = {
    isLast: false,
  };

  _ref: React.RefObject<TextInput> = React.createRef();

  componentDidMount() {
    this.props.markAsChainable(this.props.name, this._ref);
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
