import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Chainable from 'react-native-chainable';

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
                isLast
              />
            </React.Fragment>
          )}
        </Chainable.Form>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
