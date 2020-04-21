import React from 'react';
import {View, Text} from 'react-native';

import {FormTextInput} from '~/src/components/form/elements';

class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <FormTextInput name="email" />
        <FormTextInput name="password" type="password" />
      </View>
    );
  }
}

export default Login;
