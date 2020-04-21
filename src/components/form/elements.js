import React from 'react';
import {TextInput, Text} from 'react-native';

import {textInputStyle} from '~/src/styles/components/form/elements';

export const FormTextInput = ({label = '', id, ...props}) => {
  return (
    <React.Fragment>
      {label && (
        <label htmlFor={id}>
          <Text>{label}</Text>
        </label>
      )}
      <TextInput id={id} styles={textInputStyle} {...props} />
    </React.Fragment>
  );
};
