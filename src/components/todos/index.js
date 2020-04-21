import React from 'react';
import {View, Text} from 'react-native';
import {Card, ListItem, Divider} from 'react-native-elements';

import MOCK_TODOS from '~/src/constants/mock';

import TodoItem from './show';

class TodosList extends React.Component {
  render() {
    return (
      <View>
        <Card>
          <Text>Your todos</Text>
          {MOCK_TODOS.map(todoItem => (
            <ListItem key={todoItem.id} title={todoItem.name} bottomDivider chevron />
          ))}
        </Card>
      </View>
    );
  }
}

export default TodosList;
