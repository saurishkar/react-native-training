import React from 'react';
import {View, Text} from 'react-native';

import MOCK_TODOS from '~/src/constants/mock';

import TodoItem from './show';

class TodosList extends React.Component {
  render() {
    return (
      <View>
        <Text>Your todos</Text>
        {MOCK_TODOS.map(todoItem => (
          <TodoItem todo={todoItem} key={todoItem.id} />
        ))}
      </View>
    );
  }
}

export default TodosList;
