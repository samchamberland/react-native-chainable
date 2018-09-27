import * as React from 'react';
import { TextInput } from 'react-native';

const textInputRefs: { [key: string]: TextInput } = {};
const defaultValue = {
  addRef: (name: string, ref: TextInput | null) => {
    if (ref) {
      textInputRefs[name] = ref;
    }
  },
  chain: (name: string) => textInputRefs[name].focus(),
};

export default React.createContext(defaultValue);
