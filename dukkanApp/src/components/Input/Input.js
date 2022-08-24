import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

const Input = ({placeholder, value, onType, IconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onType}
        placeholder={placeholder}
        secureTextEntry={isSecure}
      />
      <Icon name={IconName} size={25} color="gray" />
    </View>
  );
};

export default Input;
