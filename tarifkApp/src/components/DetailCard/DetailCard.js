import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({data}) => {
  const handleClick = () => {
    if (data.meals[0].strYoutube) {
      Linking.openURL(data.meals[0].strYoutube);
    } else {
      Alert.alert('Unfortunately, there is no video for this recipe.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: data.meals[0].strMealThumb,
        }}
      />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.meals[0].strMeal}</Text>
        <Text style={styles.subtitle}>{data.meals[0].strArea}</Text>
        <Text style={styles.desc}>{data.meals[0].strInstructions}</Text>
      </View>
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailCard;
