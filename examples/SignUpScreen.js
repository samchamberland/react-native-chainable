import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Chainable } from 'react-native-chainable';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up',
  };

  state = {
    email: '',
    password: '',
    confirm: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Chainable>
          {chain => (
            <React.Fragment>
              <Chainable.Input
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
                onChangeText={text => this.setState({ confirm: text })}
                isLast
              />
            </React.Fragment>
          )}
        </Chainable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
