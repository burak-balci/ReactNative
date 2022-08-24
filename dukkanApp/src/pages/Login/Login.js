import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.style';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <View style={styles.body_container}>
        <Input placeholder="Kullanıcı adını giriniz." />
        <Input placeholder="Kullanıcı şifrenizi giriniz." />
        <Button text="Giriş Yap" />
      </View>
    </View>
  );
};

export default Login;
