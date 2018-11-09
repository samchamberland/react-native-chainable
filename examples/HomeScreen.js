import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Chainable } from 'react-native-chainable';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    email: '',
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
        <TouchableOpacity
          style={{ width: 150, alignItems: 'center', backgroundColor: 'lime' }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 150, alignItems: 'center' }}
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
