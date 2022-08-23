import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          source={{
            uri: meal.strMealThumb,
          }}
          style={styles.image}
        />
        <View style={styles.body_container}>
          <View style={styles.text_container}>
            <Text style={styles.text}>{meal.strMeal}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
