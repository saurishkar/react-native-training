import React from 'react';
import {Text, View} from 'react-native';

class TodoItem extends React.Component {
  render() {
    const {
      todo: {title, completed},
    } = this.props;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}

export default TodoItem;
