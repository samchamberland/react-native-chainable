import React from 'react';
import { View } from 'react-native';

import { Chainable } from 'react-native-chainable';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up',
  };

  state = {
    email: '',
    phone: '',
    password: '',
  };

  render() {
    return (
      <View>
        <Chainable>
          {chain => (
            <React.Fragment>
              <Chainable.Input
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => chain('phone')}
              />
              <Chainable.Input
                value={this.state.phone}
                onChangeText={text => this.setState({ phone: text })}
                keyboardType="numeric"
                name="phone"
                onSubmitEditing={() => chain('password')}
              />
              <Chainable.Input
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
                name="password"
                isLast
              />
            </React.Fragment>
          )}
        </Chainable>
      </View>
    );
  }
}
