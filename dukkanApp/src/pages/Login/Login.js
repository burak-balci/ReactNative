import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.style';
import {Formik} from 'formik';

const Login = () => {
  const handleLogin = values => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz."
              value={values.username}
              onType={handleChange('username')}
            />
            <Input
              placeholder="Kullanıcı şifrenizi giriniz."
              value={values.password}
              onType={handleChange('password')}
            />
            <Button onPress={handleSubmit} text="Giriş Yap" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
