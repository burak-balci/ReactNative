import React from 'react';
import {View, Image, Alert} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.style';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost';

const Login = ({navigation}) => {
  const {data, post, loading, error} = usePost();

  const handleLogin = values => {
    post(`${process.env.API_AUTH_URL}/login`, values);
  };

  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu.');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı');
    } else {
      navigation.navigate('ProductsPage');
    }
  }

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
              IconName="account"
            />
            <Input
              placeholder="Kullanıcı şifrenizi giriniz."
              value={values.password}
              onType={handleChange('password')}
              IconName="key"
              isSecure
            />
            <Button onPress={handleSubmit} text="Giriş Yap" loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
