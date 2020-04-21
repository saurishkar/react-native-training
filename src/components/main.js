import React from 'react';
import {View} from 'react-native';

import TodoList from '~/src/components/todos/index';

class Main extends React.Component {
  render() {
    return (
      <View>
        <TodoList />
      </View>
    );
  }
}

export default Main;
