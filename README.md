# react-native-chainable

🔗 Chain through your React Native forms with ease

## Usage

```jsx
import * as Chainable from 'react-native-chainable';

export default class SignUp {
  // ...

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Chainable.Form>
          {next => (
            <React.Fragment>
              <Chainable.TextInput
                name="email"
                style={styles.textInput}
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => next('password')}
              />
              <Chainable.TextInput
                name="password"
                style={styles.textInput}
                secureTextEntry
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                onSubmitEditing={() => next('confirm')}
              />
              <Chainable.TextInput
                name="confirm"
                style={styles.textInput}
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
