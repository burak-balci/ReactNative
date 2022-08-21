import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };

    navigation.navigate('MemberResultScreen', {user});
  };

  return (
    <View>
      <Input
        label="Üye Adı"
        placeholder="Üyenin ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üyenin soyismini giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üyenin yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-posta adresini giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin memleketini giriniz..."
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;
