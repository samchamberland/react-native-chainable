import React, { RefObject, Component, createRef } from 'react';
import { Platform, TextInput, TextInputProps } from 'react-native';

type MarkAsChainableFn = (name: string, ref: RefObject<TextInput>) => void;

const numericKeyboards = ['numeric', 'phone-pad', 'number-pad', 'decimal-pad'];

interface Props {
  name: string;
  isLast?: boolean;
  markAsChainable: MarkAsChainableFn;
}

class Input extends Component<Props & TextInputProps> {
  static defaultProps = {
    isLast: false,
  };

  _textInput = createRef<TextInput>();

  componentDidMount() {
    if (this.props.name) {
      this.props.markAsChainable(this.props.name, this._textInput);
    }
  }

  render() {
    let { returnKeyType } = this.props;

    // don't blindly override `returnKeyType`
    // the default (e.g. `return`) look could be wanted
    if (this.props.isLast || typeof this.props.onSubmitEditing === 'function') {
      returnKeyType =
        this.props.isLast ||
        (this.props.keyboardType &&
          numericKeyboards.includes(this.props.keyboardType) &&
          Platform.OS === 'ios')
          ? 'done'
          : 'next';
    }

    return (
      <TextInput
        ref={this._textInput}
        returnKeyType={returnKeyType}
        {...this.props}
      />
    );
  }
}

export { Input };
