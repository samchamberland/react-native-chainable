import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as Chainable from 'react-native-chainable';

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
        <Chainable.Form>
          {(chain, by) => (
            <React.Fragment>
              <Chainable.Input
                by={() => by('email')}
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
                onSubmitEditing={() => chain('foo')}
              />
            </React.Fragment>
          )}
        </Chainable.Form>
        <Chainable.Form>
          {(chain, by) => (
            <React.Fragment>
              <Chainable.Input
                by={() => by('foo')}
                style={{ width: 150, borderWidth: 1, borderColor: 'salmon' }}
                onSubmitEditing={() => chain('email')}
              />
            </React.Fragment>
          )}
        </Chainable.Form>
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
