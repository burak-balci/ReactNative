import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onType} placeholder={placeholder} />
    </View>
  );
};

export default Input;
