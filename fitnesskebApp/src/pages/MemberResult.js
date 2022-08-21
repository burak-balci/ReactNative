import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  const {user} = route.params;
  return (
    <View>
      <Text style={styles.message}>Kayıt Tamamlandı!</Text>
      <Text style={StyleSheet.label}>Üye Adı:{user.userName}</Text>
      <Text style={StyleSheet.label}>Üye Soyadı:{user.userSurname}</Text>
      <Text style={StyleSheet.label}>Üye Yaş:{user.userAge}</Text>
      <Text style={StyleSheet.label}>Üye E-posta:{user.userMail}</Text>
      <Text style={StyleSheet.label}>Üye Memleketi:{user.userHometown}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default MemberResult;
