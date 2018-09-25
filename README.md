# react-native-chainable

🔗 Chain through your React Native forms with ease

## Installation

_Work in progress_

## Usage

```jsx
import * as Chainable from 'react-native-chainable';

export default class SignUp extends React.Component {
  // ...

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Chainable.Form>
          {chain => (
            <React.Fragment>
              <Chainable.Input
                name="email"
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => chain('password')}
              />
              <Chainable.Input
                name="password"
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                secureTextEntry
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                onSubmitEditing={() => chain('confirm')}
              />
              <Chainable.Input
                name="confirm"
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                secureTextEntry
                value={this.state.confirm}
                onChange={text => this.setState({ confirm: text })}
                isLast
              />
            </React.Fragment>
          )}
        </Chainable.Form>
      </View>
    );
  }
}
```

## API

`Chainable.Form`

### Render prop

The render prop function you pass as a function as a child will be called with a function
that allows you to chain to (i.e. set focus on) the next input by its unique name

| Type                   | Description                                 |
| ---------------------- | ------------------------------------------- |
| (name: string) => void | Function to chain to the next input by name |

`Chainable.Input`

### Props

| Name   | Type                                    | Description                                                 |
| ------ | --------------------------------------- | ----------------------------------------------------------- |
| name   | string (**required**)                   | An unique name for your input                               |
| isLast | boolean (optional, defaults to `false`) | When `true`, the input should be considered as the last one |
