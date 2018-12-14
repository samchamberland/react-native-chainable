# react-native-chainable

Chain through your React Native forms with ease

## Installation

```sh
npm install react-native-chainable --save

# or

yarn add react-native-chainable
```

## Usage

```jsx
import { Chainable } from 'react-native-chainable';

class SignUpScreen extends React.Component {
  // ...

  render() {
    return (
      <View>
        <Chainable>
          {chain => (
            <React.Fragment>
              <Chainable.Input
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => chain('password')}
              />
              <Chainable.Input
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
                onSubmitEditing={() => chain('confirm')}
                name="password"
              />
              <Chainable.Input
                value={this.state.confirm}
                onChangeText={text => this.setState({ confirm: text })}
                secureTextEntry
                name="confirm"
                isLast
              />
            </React.Fragment>
          )}
        </Chainable>
      </View>
    );
  }
}
```

## API

`<Chainable />`

### Render prop (function as a child)

The function you pass as a child will be called with a function that allows you to chain to (i.e. set focus on) the next input by name

| Type                   | Description                                 |
| ---------------------- | ------------------------------------------- |
| (name: string) => void | Function to chain to the next input by name |

`<Chainable.Input />`

### Props

| Name   | Type                                    | Description                                                 |
| ------ | --------------------------------------- | ----------------------------------------------------------- |
| name   | string (optional)                       | A name for the input                                        |
| isLast | boolean (optional, defaults to `false`) | When `true`, the input should be considered as the last one |
