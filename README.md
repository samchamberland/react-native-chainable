# react-native-chainable

🔗 Chain through your React Native forms with ease

## Installation

_Work in progress_

## Usage

```jsx
import * as Chainable from 'react-native-chainable';

export default class HomeScreen extends React.Component {
  // ...

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Chainable.Form>
          {(chain, by) => (
            <React.Fragment>
              <Chainable.Input
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => chain('password')}
              />
              <Chainable.Input
                by={() => by('password')}
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                secureTextEntry
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                onSubmitEditing={() => chain('confirm')}
              />
              <Chainable.Input
                by={() => by('confirm')}
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                secureTextEntry
                value={this.state.confirm}
                onChangeText={text => this.setState({ confirm: text })}
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

`<Chainable.Form />`

### Render prop (function as a child)

The function you pass as a child will be called with a function that allows you to chain to (i.e. set focus on) the next input by name and a function to mark an input as chainable by a given name

| Type               | Description                                              |
| ------------------ | -------------------------------------------------------- |
| Function (`chain`) | Function to chain to the next input by name              |
| Function (`by`)    | Function to mark your input as chainable by a given name |

`<Chainable.Input />`

### Props

| Name   | Type                                    | Description                                                                                                     |
| ------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| by     | Function (**required**)                 | The function given by `<Chainable.Form />`. It must be called with a name for the input to mark it as chainable |
| isLast | boolean (optional, defaults to `false`) | When `true`, the input should be considered as the last one                                                     |
