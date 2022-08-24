import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, value, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onType}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
